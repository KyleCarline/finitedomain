// this is an import function for config
// it converts a DSL string to a $config
// see /docs/dsl.txt for syntax
// see exporter.js to convert a config to this DSL
import {
  SUB,
  SUP,
  ASSERT,
  ASSERT_LOG2,
} from './helpers';
import {
  ML_VV_EQ,
  ML_V8_EQ,
  ML_88_EQ,
  ML_VV_NEQ,
  ML_V8_NEQ,
  ML_88_NEQ,
  ML_VV_LT,
  ML_V8_LT,
  ML_8V_LT,
  ML_88_LT,
  ML_VV_LTE,
  ML_V8_LTE,
  ML_8V_LTE,
  ML_88_LTE,
  ML_VVV_ISEQ,
  ML_V8V_ISEQ,
  ML_VV8_ISEQ,
  ML_88V_ISEQ,
  ML_V88_ISEQ,
  ML_888_ISEQ,
  ML_VVV_ISNEQ,
  ML_V8V_ISNEQ,
  ML_VV8_ISNEQ,
  ML_88V_ISNEQ,
  ML_V88_ISNEQ,
  ML_888_ISNEQ,
  ML_VVV_ISLT,
  ML_8VV_ISLT,
  ML_V8V_ISLT,
  ML_VV8_ISLT,
  ML_88V_ISLT,
  ML_V88_ISLT,
  ML_8V8_ISLT,
  ML_888_ISLT,
  ML_VVV_ISLTE,
  ML_8VV_ISLTE,
  ML_V8V_ISLTE,
  ML_VV8_ISLTE,
  ML_88V_ISLTE,
  ML_V88_ISLTE,
  ML_8V8_ISLTE,
  ML_888_ISLTE,
  ML_NALL,
  ML_ISALL,
  ML_ISNALL,
  ML_ISNONE,
  ML_8V_SUM,
  ML_PRODUCT,
  ML_DISTINCT,
  ML_PLUS,
  ML_MINUS,
  ML_MUL,
  ML_DIV,
  ML_VV_AND,
  ML_VV_OR,
  ML_VV_XOR,
  ML_VV_NAND,
  ML_VV_XNOR,
  ML_START,
  ML_STOP,
  ML_NOOP,
  ML_NOOP2,
  ML_NOOP3,
  ML_NOOP4,
  ML_JMP,
  ML_JMP32,
  ML_DEBUG,

  SIZEOF_V,
  SIZEOF_W,
  //SIZEOF_VV,
  //SIZEOF_8V,
  //SIZEOF_V8,
  //SIZEOF_88,
  //SIZEOF_VVV,
  //SIZEOF_8VV,
  //SIZEOF_V8V,
  //SIZEOF_VV8,
  //SIZEOF_88V,
  //SIZEOF_V88,
  //SIZEOF_8V8,
  //SIZEOF_888,
  //SIZEOF_COUNT,
} from './ml';
import {
  domain_createRange,
  domain_createValue,
  domain_toArr,
} from './domain';

// BODY_START

// ords (number matching is faster, especially since we use a buffer anyways)
const $$AND = 38;
const $$AT = 64;
const $$BANG = 33;
const $$COLON = 58;
const $$COMMA = 44;
const $$CR = 10;
const $$LF = 13;
const $$DASH = 45;
const $$DIV = 47;
const $$EQ = 61;
const $$GT = 62;
const $$HASH = 35;
const $$LEFTBRACK = 91;
const $$LEFTPAREN = 40;
const $$LT = 60;
const $$OR = 124;
const $$PLUS = 43;
const $$QM = 63;
const $$SPACE = 32;
const $$RIGHTBRACK = 93;
const $$RIGHTPAREN = 41;
const $$SQUOTE = 39;
const $$STAR = 42;
const $$TAB = 7;
const $$XOR = 94;
const $$0 = 48;
const $$1 = 49;
const $$2 = 50;
const $$3 = 51;
const $$4 = 52;
const $$5 = 53;
const $$6 = 54;
const $$7 = 55;
const $$8 = 56;
const $$9 = 57;
const $$a = 97;
const $$c = 99;
const $$d = 100;
const $$e = 101;
const $$g = 103;
const $$i = 105;
const $$l = 108;
const $$m = 109;
const $$n = 110;
const $$o = 111;
const $$p = 112;
const $$r = 114;
const $$s = 115;
const $$t = 116;
const $$x = 120;
const $$z = 122;

/**
 * Compile the constraint dsl to a bytecode
 *
 * @param {string} dslStr
 * @param {Object} problem
 * @param {Function} addVar
 * @param {Function} nameToIndex
 * @param {boolean} [_debug] Improved error reporting when true
 * @returns {string}
 */
function dslToMl(dslStr, problem, addVar, nameToIndex, _debug) {
  ASSERT_LOG2('dslToMl:', [dslStr.slice(0, 100).replace(/ +/g, ' ') + (dslStr.replace(/ +/g, ' ').length > 100 ? '...' : '')]);

  problem.input.varstrat = 'default';
  problem.input.valstrat = 'default';
  problem.input.dsl = dslStr;

  let constraintCount = 0;
  let freeDirective = -1; // for `@custom free x`. this var tries to ensure exactly x bytes are "free"

  let dslPointer = 0;
  let dslBuf = Buffer.from(dslStr, 'binary');
  let len = dslBuf.length;

  let mlBufSize = Math.ceil(dslBuf.length / 5);
  let mlBuffer = new Buffer(mlBufSize).fill(0); // 20% is arbitrary choice. grown dynamically when needed
  let mlPointer = 0;

  encode8bit(ML_START);

  while (!isEof()) parseStatement();

  if (freeDirective > 0) {
    // compile a jump of given size. this will be considered available space
    ASSERT_LOG2('forcing', freeDirective, 'bytes of available space');
    compileJump(freeDirective);
  }

  encode8bit(ML_STOP); // this step will be undone but serves to ensure the buffer isnt grown in the actual compilation step (which happens after the available-space-checks)
  --mlPointer;

  if (freeDirective < 0) {
    // compile a jump for the remainder of the space, if any, which could be used by the recycle mechanisms
    // only do this here when the free directive is absent
    let leftFree = (mlBufSize - mlPointer) - 1; // STOP will occupy 1 byte
    ASSERT_LOG2('space available', leftFree, 'bytes');
    if (leftFree > 0) compileJump(leftFree);
  }

  encode8bit(ML_STOP); // put the STOP at the end

  // if there is now still space left, we need to crop it because freeDirective was set and didnt consume it all
  if (mlBufSize - mlPointer) {
    ASSERT_LOG2('cropping excess available space', mlBufSize, mlPointer, mlBufSize - mlPointer);
    // if the free directive was given, remove any excess free space
    // note that one more byte needs to be compiled after this (ML_STOP)
    mlBuffer = mlBuffer.slice(0, mlPointer);
  }
  ASSERT(mlPointer === mlBuffer.length, 'mlPointer should now be at the first unavailable cell of the buffer', mlPointer, mlBuffer.length, mlBuffer);

  problem.ml = mlBuffer;

  console.log('# dslToMl: parsed', constraintCount, 'constraints');
  return;

  // ########################################################################

  function encode8bit(num) {
    ASSERT(typeof num === 'number' && num >= 0 && num <= 0xff, 'OOB number');
    ASSERT_LOG2('encode8bit:', num, 'dsl pointer:', dslPointer, ', ml pointer:', mlPointer);

    if (mlPointer >= mlBufSize) grow();
    mlBuffer[mlPointer++] = num;
  }

  function encode16bit(num) {
    ASSERT_LOG2('encode16bit:', num, '->', num >> 8, num & 0xff, 'dsl pointer:', dslPointer, ', ml pointer:', mlPointer);
    ASSERT(typeof num === 'number', 'Encoding 16bit must be num', typeof num, num);
    ASSERT(num >= 0, 'OOB num', num);
    if (num > 0xffff) THROW('Need 32bit num support but missing it', num);

    if (mlPointer >= mlBufSize) grow();
    mlBuffer[mlPointer++] = (num >> 8) & 0xff;
    mlBuffer[mlPointer++] = num & 0xff;
  }

  function encode32bit(num) {
    ASSERT_LOG2('encode32bit:', num, '->', (num >> 24) & 0xff, (num >> 16) & 0xff, (num >> 8) & 0xff, num & 0xff, 'dsl pointer:', dslPointer, ', ml pointer:', mlPointer);
    ASSERT(typeof num === 'number', 'Encoding 32bit must be num', typeof num, num);
    ASSERT(num >= 0, 'OOB num', num);
    if (num > 0xffffffff) THROW('This requires 64bit support', num);

    if (mlPointer >= mlBufSize) grow();
    mlBuffer[mlPointer++] = (num >> 24) & 0xff;
    mlBuffer[mlPointer++] = (num >> 16) & 0xff;
    mlBuffer[mlPointer++] = (num >> 8) & 0xff;
    mlBuffer[mlPointer++] = num & 0xff;
  }

  function grow(forcedExtraSpace) {
    ASSERT_LOG2(' - grow(' + (forcedExtraSpace || '') + ') from', mlBufSize);
    // grow the buffer by 10% or set it to `force`
    // you can't really grow existing buffers, instead you create a bigger buffer and copy the old one into it...
    let oldSize = mlBufSize;
    if (forcedExtraSpace) mlBufSize += forcedExtraSpace;
    else mlBufSize += Math.max(Math.ceil(mlBufSize * 0.1), 10);
    ASSERT(mlBufSize > mlBuffer.length, 'grow() should grow() at least a bit...', mlBuffer.length, '->', mlBufSize);
    mlBuffer = Buffer.concat([mlBuffer], mlBufSize); // wont actually concat, but will copy the existing buffer into a buffer of given size
    mlBuffer.fill(0, oldSize);
  }

  function encodeNameOrLiteral(name, addVar) {
    if (typeof name === 'number') {
      ASSERT_LOG2('dsl parser; encodeNameOrLiteral will generate an anon var for a number');
      name = addVar(undefined, name, false, true);
    }
    return encodeName(name);
  }

  function encodeName(name) {
    return encode16bit(nameToIndexSafe(name));
  }

  function encodeNameOrDie(name) {
    return encode16bit(nameToIndexSafe(name, true));
  }

  function nameToIndexSafe(name, mustExist) {
    if (typeof name !== 'string') THROW('Expecting name to be a string:' + name);
    ASSERT_LOG2('encoding name:', name);
    ASSERT_LOG2('to index', nameToIndex(name));
    let index = nameToIndex(name);
    if (index < 0) {
      if (mustExist) THROW('Required var to be declared but it was not: [' + name + ']');
      index = addVar(name, undefined, false, false, true);
    }
    return index;
  }

  function read() {
    return dslBuf[dslPointer];
  }

  function readD(delta) {
    return dslBuf[dslPointer + delta];
  }

  function substr(start, stop) { // use sparingly!
    return dslBuf.slice(start, stop).toString('binary');
  }

  function skip() {
    ++dslPointer;
  }

  function is(c, desc) {
    if (read() !== c) THROW('Expected ' + (desc + ' ' || '') + '`' + c + '`, found `' + read() + '`');
    skip();
  }

  function skipWhitespaces() {
    while (dslPointer < len && isWhitespace(read())) skip();
  }

  function skipWhites() {
    while (!isEof()) {
      let c = read();
      if (isWhite(c)) {
        skip();
      } else if (isComment(c)) {
        skipComment();
      } else {
        break;
      }
    }
  }

  function isWhitespace(s) {
    return s === $$SPACE || s === $$TAB;
  }

  function isNewline(s) {
    // no, I don't feel bad for also flaggin a comment as eol :)
    return s === $$CR || s === $$LF;
  }

  function isComment(s) {
    return s === $$HASH;
  }

  function isWhite(s) {
    return isWhitespace(s) || isNewline(s);
  }

  function expectEol() {
    skipWhitespaces();
    if (dslPointer < len) {
      let c = read();
      if (c === $$HASH) {
        skipComment();
      } else if (isNewline(c)) {
        skip();
      } else {
        THROW('Expected EOL but got `' + read() + '`');
      }
    }
  }

  function isEof() {
    return dslPointer >= len;
  }

  function parseStatement() {
    // either:
    // - start with colon: var decl
    // - start with hash: line comment
    // - empty: empty
    // - otherwise: constraint

    skipWhites();

    switch (read()) {
      case $$COLON:
        return parseVar();
      case $$HASH:
        return skipComment();
      case $$AT:
        return parseAtRule();
      default:
        if (!isEof()) return parseVoidConstraint();
    }
  }

  function parseVar() {
    skip(); // is($$COLON)
    skipWhitespaces();
    let nameNames = parseIdentifier();
    skipWhitespaces();
    if (read() === $$COMMA) {
      nameNames = [nameNames];
      while (!isEof() && read() === $$COMMA) {
        skip();
        skipWhitespaces();
        nameNames.push(parseIdentifier());
        skipWhitespaces();
      }
    }
    let domain = parseDomain();
    skipWhitespaces();
    let alts;
    while (readD(0) === $$a && readD(1) === $$l && readD(2) === $$i && readD(3) === $$a && readD(4) === $$a && readD(5) === $$s && readD(6) === $$LEFTPAREN) {
      if (!alts) alts = [];
      alts.push(parseAlias(dslPointer += 6));
      skipWhitespaces();
    }
    let mod = parseModifier();
    expectEol();

    if (typeof nameNames === 'string') {
      if (nameToIndex(nameNames) >= 0) {
        return THROW('Dont declare a var after using it');
      }
      addVar(nameNames, domain, mod);
    } else {
      nameNames.map(name => {
        if (nameToIndex(name) >= 0) {
          return THROW('Dont declare a var after using it');
        }
        addVar(name, domain, mod);
      });
    }

    if (alts) THROW('implement me (var alias)'); // alts.map(name => addVar(name, domain, mod));
  }

  function parseIdentifier() {
    if (read() === $$SQUOTE) return parseQuotedIdentifier();
    else return parseUnquotedIdentifier();
  }

  function parseQuotedIdentifier() {
    is($$SQUOTE);

    let ident = '';
    while (!isEof()) {
      let c = read();
      if (c === $$SQUOTE) break;
      ident += String.fromCharCode(c);
      skip();
    }
    if (isEof()) THROW('Quoted identifier must be closed');
    if (!ident) THROW('Expected to parse identifier, found none');
    skip(); // quote
    return ident; // return unquoted ident
  }

  function parseUnquotedIdentifier() {
    // anything terminated by whitespace
    let c = read();
    let ident = '';
    if (c >= $$0 && c <= $$9) THROW('Unquoted ident cant start with number');
    while (!isEof()) {
      c = read();
      if (!isValidUnquotedIdentChar(c)) break;
      ident += String.fromCharCode(c);
      skip();
    }
    if (!ident) THROW('Expected to parse identifier, found none');
    return ident;
  }

  function isValidUnquotedIdentChar(c) {
    switch (c) {
      case $$LEFTPAREN:
      case $$RIGHTPAREN:
      case $$COMMA:
      case $$LEFTBRACK:
      case $$RIGHTBRACK:
      case $$SQUOTE:
      case $$HASH:
        return false;
    }
    if (isWhite(c)) return false;
    return true;
  }

  function parseAlias() {
    skipWhitespaces();

    let alias = '';
    while (true) {
      let c = read();
      if (c === $$RIGHTPAREN) break;
      if (isNewline(c)) THROW('Alias must be closed with a `)` but wasnt (eol)');
      if (isEof()) THROW('Alias must be closed with a `)` but wasnt (eof)');
      alias += String.fromCharCode(c);
      skip();
    }
    if (!alias) THROW('The alias() can not be empty but was');

    skipWhitespaces();
    is($$RIGHTPAREN, '`alias` to be closed by `)`');

    return alias;
  }

  function parseDomain() {
    // []
    // [lo hi]
    // [[lo hi] [lo hi] ..]
    // *
    // 25
    // (comma's optional and ignored)

    let c = read();
    if (c === $$EQ) {
      skip();
      skipWhitespaces();
      c = read();
    }

    let domain;
    switch (c) {
      case $$LEFTBRACK:

        is($$LEFTBRACK, 'domain start');
        skipWhitespaces();

        domain = [];

        if (read() === $$LEFTBRACK) {
          do {
            skip();
            skipWhitespaces();
            let lo = parseNumber();
            skipWhitespaces();
            if (read() === $$COMMA) {
              skip();
              skipWhitespaces();
            }
            let hi = parseNumber();
            skipWhitespaces();
            is($$RIGHTBRACK, 'range-end');
            skipWhitespaces();

            domain.push(lo, hi);

            if (read() === $$COMMA) {
              skip();
              skipWhitespaces();
            }
          } while (read() === $$LEFTBRACK);
        } else if (read() !== $$RIGHTBRACK) {
          do {
            skipWhitespaces();
            let lo = parseNumber();
            skipWhitespaces();
            if (read() === $$COMMA) {
              skip();
              skipWhitespaces();
            }
            let hi = parseNumber();
            skipWhitespaces();

            domain.push(lo, hi);

            if (read() === $$COMMA) {
              skip();
              skipWhitespaces();
            }
          } while (read() !== $$RIGHTBRACK);
        }

        is($$RIGHTBRACK, 'domain-end');
        return domain;

      case $$STAR:
        skip();
        return [SUB, SUP];

      case $$0:
      case $$1:
      case $$2:
      case $$3:
      case $$4:
      case $$5:
      case $$6:
      case $$7:
      case $$8:
      case $$9:
        let v = parseNumber();
        skipWhitespaces();
        return [v, v];
    }

    THROW('Expecting valid domain start, found `' + c + '`');
  }

  function parseModifier() {
    if (read() !== $$AT) return;
    skip();

    let mod = {};

    let stratName = '';
    while (true) {
      let c = read();
      if (c < $$a || c > $$z) break;
      stratName += String.fromCharCode(c);
      skip();
    }

    switch (stratName) {
      case 'list':
        parseList(mod);
        break;

      case 'markov':
        parseMarkov(mod);
        break;

      case 'max':
      case 'mid':
      case 'min':
      case 'minMaxCycle':
      case 'naive':
      case 'splitMax':
      case 'splitMin':
        break;

      default:
        THROW('Expecting a strategy name after the `@` modifier (`' + stratName + '`)');
    }

    mod.valtype = stratName;

    return mod;
  }

  function parseList(mod) {
    skipWhitespaces();

    if (!(readD(0) === $$p && readD(1) === $$r && readD(2) === $$i && readD(3) === $$o && readD(4) === $$LEFTPAREN)) {
      THROW('Expecting the priorities to follow the `@list`');
    }

    dslPointer += 5;
    mod.list = parseNumList();
    is($$RIGHTPAREN, 'list end');
  }

  function parseMarkov(mod) {
    let repeat = true;
    while (repeat) {
      repeat = false;
      skipWhitespaces();
      switch (read()) {
        case $$m:
          if (readD(1) === $$a && readD(2) === $$t && readD(3) === $$r && readD(4) === $$i && readD(5) === $$x && readD(6) === $$LEFTPAREN) {
            // TOFIX: there is no validation here. apply stricter and safe matrix parsing

            dslPointer += 7;
            let start = dslPointer;
            while (read() !== $$RIGHTPAREN && !isEof()) skip();
            if (isEof()) THROW('The matrix must be closed by a `)` but did not find any');
            ASSERT(read() === $$RIGHTPAREN, 'code should only stop at eof or )');

            let matrix = substr(start, dslPointer);
            let code = 'return ' + matrix;
            let func = Function(code);
            /* eslint no-new-func: "off" */
            mod.matrix = func();

            is($$RIGHTPAREN, 'end of matrix'); // kind of a redundant double check. could also just skip() here.

            repeat = true;
          }
          break;

        case $$l:
          if (readD(1) === $$e && readD(2) === $$g && readD(3) === $$e && readD(4) === $$n && readD(5) === $$d && readD(6) === $$LEFTPAREN) {
            dslPointer += 7;
            mod.legend = parseNumList();
            skipWhitespaces();
            is($$RIGHTPAREN, 'legend closer');

            repeat = true;
          }
          break;

        case $$e:
          if (readD(1) === $$x && readD(2) === $$p && readD(3) === $$a && readD(4) === $$n && readD(5) === $$d && readD(6) === $$LEFTPAREN) {
            dslPointer += 7;
            mod.expandVectorsWith = parseNumber();
            skipWhitespaces();
            is($$RIGHTPAREN, 'expand closer');

            repeat = true;
          }
          break;
      }
    }
  }

  function skipComment() {
    is($$HASH, 'comment start'); //is('#', 'comment hash');
    while (!isEof() && !isNewline(read())) skip();
    if (!isEof()) skip();
  }

  function parseVoidConstraint() {
    // parse a constraint that does not return a value itself

    // first try to parse single value constraints without value like markov() and distinct()
    if (parseUexpr()) return;

    // so the first value must be a value returning expr
    let A = parseVexpr(); // returns a var name or a constant value

    skipWhitespaces();
    if (!isEof()) { // `A==B<eof>` then A==B would be part of A and the parser would want to parse a cop here. there's a test case.
      let cop = parseCop();
      skipWhitespaces();

      if (cop === '=') {
        parseAssignment(A);
      } else if (cop) {
        let B = parseVexpr();
        compileVoidConstraint(A, cop, B);
      }
    }

    expectEol();
  }

  function compileVoidConstraint(A, cop, B) {
    ++constraintCount;
    // literals are only supported as 8bit values, otherwise just compile it as a solved var
    let codeA = typeof A === 'number' ? A <= 0xff ? '8' : (A = addVar(undefined, A, false, true), 'V') : 'V';
    let codeB = typeof B === 'number' ? B <= 0xff ? '8' : (B = addVar(undefined, B, false, true), 'V') : 'V';
    switch (codeA + cop + codeB) {
      case 'V==V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_EQ);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_EQ);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case 'V==8':
        encode8bit(ML_V8_EQ);
        encodeName(A);
        encode8bit(B);
        break;
      case '8==V':
        encode8bit(ML_V8_EQ);
        encodeName(B);
        encode8bit(A);
        break;
      case '8==8':
        encode8bit(ML_88_EQ);
        encode8bit(A);
        encode8bit(B);
        break;

      case 'V!=V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_NEQ);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_NEQ);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case 'V!=8':
        encode8bit(ML_V8_NEQ);
        encodeName(A);
        encode8bit(B);
        break;
      case '8!=V':
        encode8bit(ML_V8_NEQ);
        encodeName(B);
        encode8bit(A);
        break;
      case '8!=8':
        encode8bit(ML_88_NEQ);
        encode8bit(A);
        encode8bit(B);
        break;

      case 'V<V':
        encode8bit(ML_VV_LT);
        encodeName(A);
        encodeName(B);
        break;
      case 'V<8':
        encode8bit(ML_V8_LT);
        encodeName(A);
        encode8bit(B);
        break;
      case '8<V':
        encode8bit(ML_8V_LT);
        encode8bit(A);
        encodeName(B);
        break;
      case '8<8':
        encode8bit(ML_88_LT);
        encode8bit(A);
        encode8bit(B);
        break;

      case 'V<=V':
        encode8bit(ML_VV_LTE);
        encodeName(A);
        encodeName(B);
        break;
      case 'V<=8':
        encode8bit(ML_V8_LTE);
        encodeName(A);
        encode8bit(B);
        break;
      case '8<=V':
        encode8bit(ML_8V_LTE);
        encode8bit(A);
        encodeName(B);
        break;
      case '8<=8':
        encode8bit(ML_88_LTE);
        encode8bit(A);
        encode8bit(B);
        break;

      case 'V>V':
        encode8bit(ML_VV_LT);
        encodeName(B);
        encodeName(A);
        break;
      case 'V>8':
        encode8bit(ML_8V_LT);
        encode8bit(B);
        encodeName(A);
        break;
      case '8>V':
        encode8bit(ML_V8_LT);
        encodeName(B);
        encode8bit(A);
        break;
      case '8>8':
        encode8bit(ML_88_LT);
        encode8bit(B);
        encode8bit(A);
        break;

      case 'V>=V':
        encode8bit(ML_VV_LTE);
        encodeName(B);
        encodeName(A);
        break;
      case 'V>=8':
        encode8bit(ML_8V_LTE);
        encode8bit(B);
        encodeName(A);
        break;
      case '8>=V':
        encode8bit(ML_V8_LTE);
        encodeName(B);
        encode8bit(A);
        break;
      case '8>=8':
        encode8bit(ML_88_LTE);
        encode8bit(B);
        encode8bit(A);
        break;

      case 'V&V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_AND);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_AND);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case '8&V':
        encode8bit(ML_VV_AND);
        encodeName(B);
        encodeNameOrLiteral(A);
        break;
      case 'V&8':
        encode8bit(ML_VV_AND);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case '8&8':
        encode8bit(ML_VV_AND);
        encodeNameOrLiteral(B);
        encodeNameOrLiteral(A);
        break;

      case 'V|V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_OR);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_OR);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case '8|V':
        encode8bit(ML_VV_OR);
        encodeName(B);
        encodeNameOrLiteral(A);
        break;
      case 'V|8':
        encode8bit(ML_VV_OR);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case '8|8':
        encode8bit(ML_VV_OR);
        encodeNameOrLiteral(B);
        encodeNameOrLiteral(A);
        break;

      case 'V^V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_XOR);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_XOR);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case '8^V':
        encode8bit(ML_VV_XOR);
        encodeName(B);
        encodeNameOrLiteral(A);
        break;
      case 'V^8':
        encode8bit(ML_VV_XOR);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case '8^8':
        encode8bit(ML_VV_XOR);
        encodeNameOrLiteral(B);
        encodeNameOrLiteral(A);
        break;

      case 'V!&V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_NAND);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_NAND);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case '8!&V':
        encode8bit(ML_VV_NAND);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case 'V!&8':
        encode8bit(ML_VV_NAND);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case '8!&8':
        encode8bit(ML_VV_NAND);
        encodeNameOrLiteral(B);
        encodeNameOrLiteral(A);
        break;

      case 'V!^V':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV_XNOR);
          encode16bit(A);
          encode16bit(B);
        } else {
          encode8bit(ML_VV_XNOR);
          encode16bit(B);
          encode16bit(A);
        }
        break;
      case '8!^V':
        encode8bit(ML_VV_XNOR);
        encodeName(B);
        encodeNameOrLiteral(A);
        break;
      case 'V!^8':
        encode8bit(ML_VV_XNOR);
        encodeNameOrLiteral(B);
        encodeName(A);
        break;
      case '8!^8':
        encode8bit(ML_VV_XNOR);
        encodeNameOrLiteral(B);
        encodeNameOrLiteral(A);
        break;

      default:
        THROW('Unknown constraint op: [' + cop + ']');
    }
  }

  function createResultVar(from, forceBool, noLit) {
    ASSERT_LOG2('createResultVar', from, forceBool, noLit);
    ASSERT(typeof from === 'string' || typeof from === 'number' || from === undefined, 'input can only be a string (name) or number (literal) or undefined (new var reflects result for something else)');

    if (from === undefined) {
      return addVar(undefined, forceBool ? [0, 1] : undefined, false, true);
    }

    if (typeof from === 'number') {
      // a literal that is >1 where a bool is expected will always result in a problem (bad input problem)
      if (forceBool && from > 1) return addVar(undefined, [], false, true);
      // only supporting literals of 8bit. in some cases literals still need to become temp anon vars when the op doesnt have a lit version for it.
      if (from > 0xff || noLit) return addVar(undefined, (forceBool && from > 1) ? [] : domain_createValue(from), false, true);
      return from;
    }

    if (nameToIndex(from) < 0) return addVar(from, forceBool ? domain_toArr(domain_createRange(0, 1)) : undefined, false, true);
    return from;
  }

  function parseAssignment(C) {
    let A = parseVexpr(C);
    skipWhitespaces();
    let c = read();
    if (isEof() || isNewline(c) || isComment(c)) {
      // any var, literal, or group without "top-level" op (`A=5`, `A=X`, `A=(B+C)`, `A=sum(...)`, etc)
      if (A !== C) {
        C = createResultVar(C); // wont change for 8bit literals or existing vars
        compileVoidConstraint(A, '==', C);
      }
    } else {
      parseAssignRest(A, C);
    }
  }

  function parseAssignRest(A, C) {
    let rop = parseRop();
    skipWhitespaces();
    let B = parseVexpr();

    return _parseAssignRest(A, rop, B, C);
  }

  function _parseAssignRest(A, rop, B, C) {
    ++constraintCount;

    // force fresh reifier result vars to a bool
    C = createResultVar(C, rop[rop.length - 1] === '?'); // wont change for 8bit literals or existing vars

    // literals are only supported as 8bit values, otherwise just compile it as a solved var
    let codeA = typeof A === 'number' ? A <= 0xff ? '8' : (A = addVar(undefined, A, false, true), 'V') : 'V';
    let codeB = typeof B === 'number' ? B <= 0xff ? '8' : (B = addVar(undefined, B, false, true), 'V') : 'V';
    let codeC = typeof C === 'number' ? '8' : 'V'; // check already done above

    switch (codeA + rop + codeB + codeC) {
      case 'V==?VV':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VVV_ISEQ);
          encode16bit(A);
          encode16bit(B);
          encodeName(C);
        } else {
          encode8bit(ML_VVV_ISEQ);
          encode16bit(B);
          encode16bit(A);
          encodeName(C);
        }
        break;
      case '8==?VV':
        encode8bit(ML_V8V_ISEQ);
        encodeName(B);
        encode8bit(A);
        encodeName(C);
        break;
      case 'V==?8V':
        encode8bit(ML_V8V_ISEQ);
        encodeName(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V==?V8':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV8_ISEQ);
          encode16bit(A);
          encode16bit(B);
          encode8bit(C);
        } else {
          encode8bit(ML_VV8_ISEQ);
          encode16bit(B);
          encode16bit(A);
          encode8bit(C);
        }
        break;
      case '8==?8V':
        encode8bit(ML_88V_ISEQ);
        encode8bit(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V==?88':
        encode8bit(ML_V88_ISEQ);
        encodeName(A);
        encode8bit(B);
        encode8bit(C);
        break;
      case '8==?V8':
        encode8bit(ML_V88_ISEQ);
        encodeName(B);
        encode8bit(A);
        encode8bit(C);
        break;
      case '8==?88':
        encode8bit(ML_888_ISEQ);
        encode8bit(A);
        encode8bit(B);
        encode8bit(C);
        break;

      case 'V!=?VV':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VVV_ISNEQ);
          encode16bit(A);
          encode16bit(B);
          encodeName(C);
        } else {
          encode8bit(ML_VVV_ISNEQ);
          encode16bit(B);
          encode16bit(A);
          encodeName(C);
        }
        break;
      case '8!=?VV':
        encode8bit(ML_V8V_ISNEQ);
        encodeName(B);
        encode8bit(A);
        encodeName(C);
        break;
      case 'V!=?8V':
        encode8bit(ML_V8V_ISNEQ);
        encodeName(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V!=?V8':
        A = nameToIndexSafe(A);
        B = nameToIndexSafe(B);
        if (A < B) {
          encode8bit(ML_VV8_ISNEQ);
          encode16bit(A);
          encode16bit(B);
          encode8bit(C);
        } else {
          encode8bit(ML_VV8_ISNEQ);
          encode16bit(B);
          encode16bit(A);
          encode8bit(C);
        }
        break;
      case '8!=?8V':
        encode8bit(ML_88V_ISNEQ);
        encode8bit(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V!=?88':
        encode8bit(ML_V88_ISNEQ);
        encodeName(A);
        encode8bit(B);
        encode8bit(C);
        break;
      case '8!=?V8':
        encode8bit(ML_V88_ISNEQ);
        encodeName(B);
        encode8bit(A);
        encode8bit(C);
        break;
      case '8!=?88':
        encode8bit(ML_888_ISNEQ);
        encode8bit(A);
        encode8bit(B);
        encode8bit(C);
        break;

      case 'V<?VV':
        encode8bit(ML_VVV_ISLT);
        encodeName(A);
        encodeName(B);
        encodeName(C);
        break;
      case '8<?VV':
        encode8bit(ML_8VV_ISLT);
        encode8bit(A);
        encodeName(B);
        encodeName(C);
        break;
      case 'V<?8V':
        encode8bit(ML_V8V_ISLT);
        encodeName(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V<?V8':
        encode8bit(ML_VV8_ISLT);
        encodeName(A);
        encodeName(B);
        encode8bit(C);
        break;
      case '8<?8V':
        encode8bit(ML_88V_ISLT);
        encode8bit(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V<?88':
        encode8bit(ML_V88_ISLT);
        encodeName(A);
        encode8bit(B);
        encode8bit(C);
        break;
      case '8<?V8':
        encode8bit(ML_8V8_ISLT);
        encode8bit(A);
        encodeName(B);
        encode8bit(C);
        break;
      case '8<?88':
        encode8bit(ML_888_ISLT);
        encode8bit(A);
        encode8bit(B);
        encode8bit(C);
        break;

      case 'V<=?VV':
        encode8bit(ML_VVV_ISLTE);
        encodeName(A);
        encodeName(B);
        encodeName(C);
        break;
      case '8<=?VV':
        encode8bit(ML_8VV_ISLTE);
        encode8bit(A);
        encodeName(B);
        encodeName(C);
        break;
      case 'V<=?8V':
        encode8bit(ML_V8V_ISLTE);
        encodeName(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V<=?V8':
        encode8bit(ML_VV8_ISLTE);
        encodeName(A);
        encodeName(B);
        encode8bit(C);
        break;
      case '8<=?8V':
        encode8bit(ML_88V_ISLTE);
        encode8bit(A);
        encode8bit(B);
        encodeName(C);
        break;
      case 'V<=?88':
        encode8bit(ML_V88_ISLTE);
        encodeName(A);
        encode8bit(B);
        encode8bit(C);
        break;
      case '8<=?V8':
        encode8bit(ML_8V8_ISLTE);
        encode8bit(A);
        encodeName(B);
        encode8bit(C);
        break;
      case '8<=?88':
        encode8bit(ML_888_ISLTE);
        encode8bit(A);
        encode8bit(B);
        encode8bit(C);
        break;

      default:
        if (rop === '>?') return _parseAssignRest(B, '<?', A, C);
        if (rop === '>=?') return _parseAssignRest(B, '<=?', A, C);
        if (rop === undefined) return A;

        if (typeof A === 'number') {
          ASSERT_LOG2('dsl parser; encodeNameOrLiteral will generate an anon var for a number');
          A = addVar(undefined, A, false, false, true);
        } else {
          A = nameToIndexSafe(A);
        }
        if (typeof B === 'number') {
          ASSERT_LOG2('dsl parser; encodeNameOrLiteral will generate an anon var for a number');
          B = addVar(undefined, B, false, false, true);
        } else {
          B = nameToIndexSafe(B);
        }

        let opCode;
        let fixed = false;
        switch (rop) {
          case '+':
            opCode = ML_PLUS;
            break;
          case '-':
            opCode = ML_MINUS;
            fixed = true;
            break;
          case '*':
            opCode = ML_MUL;
            break;
          case '/':
            opCode = ML_DIV;
            fixed = true;
            break;
          default:
            return THROW('Unknown rop: `' + rop + '`');
        }

        if (fixed || A < B) {
          encode8bit(opCode);
          encode16bit(A);
          encode16bit(B);
          encodeNameOrLiteral(C, addVar);
        } else {
          encode8bit(opCode);
          encode16bit(B);
          encode16bit(A);
          encodeNameOrLiteral(C, addVar);
        }
    }
  }

  function parseCop() {
    let c = read();
    switch (c) {
      case $$EQ:
        skip();
        if (read() === $$EQ) {
          skip();
          return '==';
        }
        return '=';
      case $$BANG:
        skip();
        if (read() === $$EQ) {
          skip();
          return '!=';
        }
        if (read() === $$AND) {
          skip();
          return '!&';
        }
        if (read() === $$XOR) {
          skip();
          return '!^';
        }
        return '!';
      case $$LT:
        skip();
        if (read() === $$EQ) {
          skip();
          return '<=';
        }
        return '<';
      case $$GT:
        skip();
        if (read() === $$EQ) {
          skip();
          return '>=';
        }
        return '>';
      case $$AND:
        skip();
        return '&';
      case $$OR:
        skip();
        return '|';
      case $$XOR:
        skip();
        return '^';
      case $$HASH:
        THROW('Expected to parse a cop but found a comment instead');
        break;
      default:
        if (isEof()) THROW('Expected to parse a cop but reached eof instead');
        THROW('Unknown cop char: `' + c + '`');
    }
  }

  function parseRop() {
    switch (read()) {
      case $$EQ:
        skip();
        if (read() === $$EQ) {
          skip();
          is($$QM, 'reifier suffix');
          return '==?';
        } else {
          return '=';
        }

      case $$BANG:
        skip();
        is($$EQ, 'middle part of !=? op');
        is($$QM, 'reifier suffix');
        return '!=?';

      case $$LT:
        skip();
        if (read() === $$EQ) {
          skip();
          is($$QM, 'reifier suffix');
          return '<=?';
        } else {
          is($$QM, 'reifier suffix');
          return '<?';
        }

      case $$GT:
        skip();
        if (read() === $$EQ) {
          skip();
          is($$QM, 'reifier suffix');
          return '>=?';
        } else {
          is($$QM, 'reifier suffix');
          return '>?';
        }

      case $$PLUS:
        skip();
        return '+';

      case $$DASH:
        skip();
        return '-';

      case $$STAR:
        skip();
        return '*';

      case $$DIV:
        skip();
        return '/';

      default:
        THROW('Wanted to parse a rop but next char is `' + read() + '` (`' + String.fromCharCode(read()) + '`)');
    }
  }

  function parseUexpr() {
    // it's not very efficient (we could parse an ident before and check that result here) but it'll work for now

    let c = read();

    if (c === $$d && readD(1) === $$i && readD(2) === $$s && readD(3) === $$t && readD(4) === $$i && readD(5) === $$n && readD(6) === $$c && readD(7) === $$t && readD(8) === $$LEFTPAREN) {
      parseCalledListConstraint(ML_DISTINCT, 9);
      return true;
    }

    if (c === $$n && readD(1) === $$a && readD(2) === $$l && readD(3) === $$l && readD(4) === $$LEFTPAREN) {
      parseCalledListConstraint(ML_NALL, 5);
      return true;
    }

    return false;
  }

  function parseCalledListConstraint(opcode, delta) {
    ++constraintCount;
    dslPointer += delta;
    skipWhitespaces();
    let vals = parseVexpList();
    ASSERT(vals.length <= 255, 'dont do lists with more than 255 vars :(');
    encode8bit(opcode);
    encode16bit(vals.length);
    vals.forEach(encodeName);
    skipWhitespaces();
    is($$RIGHTPAREN, 'parseCalledListConstraint call closer');
    expectEol();
  }

  function parseVexpList() {
    let list = [];
    skipWhitespaces();
    while (!isEof() && read() !== $$RIGHTPAREN) {
      let v = parseVexpr();
      list.push(v);

      skipWhitespaces();
      if (read() === $$COMMA) {
        skip();
        skipWhitespaces();
      }
    }
    return list;
  }

  function parseVexpr(resultVar) {
    // valcall, ident, number, group

    let c = read();
    let v;
    if (c === $$LEFTPAREN) v = parseGrouping();
    else if (c === $$LEFTBRACK) {
      let d = parseDomain();
      if (d[0] === d[1] && d.length === 2) v = d[0];
      else v = addVar(undefined, d, false, true);
    } else if (c >= $$0 && c <= $$9) {
      v = parseNumber();
    } else {
      let ident = parseIdentifier();

      if (read() === $$LEFTPAREN) {
        if (ident === 'sum') v = parseSum(resultVar);
        else if (ident === 'product') v = parseArgs(ML_PRODUCT, resultVar);
        else if (ident === 'all?') v = parseArgs(ML_ISALL, resultVar, true);
        else if (ident === 'nall?') v = parseArgs(ML_ISNALL, resultVar, true);
        else if (ident === 'none?') v = parseArgs(ML_ISNONE, resultVar, true);
        else THROW('Unknown constraint func: ' + ident);
      } else {
        v = ident;
      }
    }

    return v;
  }

  function parseGrouping() {
    is($$LEFTPAREN, 'group open');
    skipWhitespaces();
    let A = parseVexpr();
    skipWhitespaces();

    if (read() === $$EQ) {
      if (read() !== $$EQ) {
        parseAssignment(A);
        skipWhitespaces();
        is($$RIGHTPAREN, 'group closer');
        return A;
      }
    }

    if (read() === $$RIGHTPAREN) {
      // just wrapping a vexpr is okay
      skip();
      return A;
    }

    let C = parseAssignRest(A);
    skipWhitespaces();
    is($$RIGHTPAREN, 'group closer');
    return C;
  }

  function parseNumber() {
    let numstr = parseNumstr();
    if (!numstr) {
      THROW('Expecting to parse a number but did not find any digits');
    }
    return parseInt(numstr, 10);
  }

  function parseSum(result) {
    ++constraintCount;
    is($$LEFTPAREN, 'sum call opener');
    skipWhitespaces();
    let refs = parseVexpList();
    result = createResultVar(result, false, true);
    ASSERT_LOG2('parseSum refs:', refs, 'result:', result, nameToIndex(result));

    encode8bit(ML_8V_SUM);
    encode16bit(refs.length); // count
    encode8bit(0); // sum of constants
    for (let i = 0, len = refs.length; i < len; ++i) {
      let r = refs[i];
      if (typeof r === 'number') {
        // have to make temp var for this :(
        r = addVar(undefined, r, false, true);
      }
      encodeName(r);
    }
    encodeName(result);

    skipWhitespaces();
    is($$RIGHTPAREN, 'sum closer');
    return result;
  }

  function parseArgs(op, result, defaultBoolResult) {
    console.log('#############', op, result, defaultBoolResult);
    ++constraintCount;
    is($$LEFTPAREN, 'args call opener');
    skipWhitespaces();
    let refs = parseVexpList();
    result = createResultVar(result, defaultBoolResult, true);
    ASSERT_LOG2('parseArgs refs:', result, ' = all(', refs, ')  ->  ', nameToIndex(result), '= all(', refs.map(nameToIndex), ') defaultBoolResult:', defaultBoolResult);

    encode8bit(op);
    encode16bit(refs.length); // count
    for (let i = 0, len = refs.length; i < len; ++i) {
      let r = refs[i];
      if (typeof r === 'number') {
        // have to make temp var for this :(
        r = addVar(undefined, r, false, true);
      }
      encodeName(r);
    }
    encodeName(result);

    skipWhitespaces();
    is($$RIGHTPAREN, 'args closer');
    return result;
  }

  function parseNumstr() {
    let numstr = '';
    while (!isEof()) {
      let c = read();
      if (c < $$0 || c > $$9) break;
      numstr += String.fromCharCode(c);
      skip();
    }
    return numstr;
  }

  function parseNumList() {
    let nums = [];

    skipWhitespaces();
    let numstr = parseNumstr();
    while (numstr) {
      nums.push(parseInt(numstr, 10));
      skipWhitespaces();
      if (read() === $$COMMA) {
        ++dslPointer;
        skipWhitespaces();
      }
      numstr = parseNumstr();
    }

    if (!nums.length) THROW('Expected to parse a list of at least some numbers but found none');
    return nums;
  }

  function parseIdentList() {
    let idents = [];

    while (true) {
      skipWhitespaces();
      if (read() === $$RIGHTPAREN) break;
      if (read() === $$COMMA) {
        skip();
        skipWhitespaces();
      }
      let ident = parseIdentifier();
      idents.push(ident);
    }

    if (!idents.length) THROW('Expected to parse a list of at least some identifiers but found none');
    return idents;
  }

  function parseIdentsToEol() {
    let idents = [];

    while (true) {
      skipWhitespaces();

      let c = read();
      if (isNewline(c)) break;

      if (c === $$COMMA) {
        skip();
        skipWhitespaces();
      }
      let ident = parseIdentifier();
      idents.push(ident);
    }

    if (!idents.length) THROW('Expected to parse a list of at least some identifiers but found none');
    return idents;
  }

  function readLineRest() {
    let str = '';
    while (!isEof()) {
      let c = read();
      if (isNewline(c)) break;
      str += String.fromCharCode(c);
      skip();
    }
    return str;
  }

  function parseAtRule() {
    is($$AT);
    // mostly temporary hacks while the dsl stabilizes...

    let ruleName = parseIdentifier();

    if (ruleName === 'custom') {
      skipWhitespaces();
      let ident = parseIdentifier();
      skipWhitespaces();
      if (read() === $$EQ) {
        skip();
        skipWhitespaces();
      }
      switch (ident) {
        case 'var-strat':
          parseVarStrat();
          break;
        case 'val-strat':
          parseValStrat();
          break;
        case 'set-valdist':
          skipWhitespaces();
          let target = parseIdentifier();
          let config = parseRestCustom();

          if (!problem.input.valdist) problem.input.valdist = {};
          problem.input.valdist[target] = JSON.parse(config);
          break;
        case 'noleaf':
          skipWhitespaces();

          let idents = parseIdentsToEol();
          for (let i = 0, len = idents.length; i < len; ++i) {
            // debug vars are never considered leaf vars until we change that (to something else and update this to something that still does the same thing)
            // this is for testing as a simple tool to prevent many trivial optimizations to kick in. it's not flawless.
            encode8bit(ML_DEBUG);
            encodeNameOrDie(idents[i]);
          }
          break;
        case 'free':
          skipWhitespaces();
          let size = parseNumber();
          ASSERT_LOG2('Found a jump of', size);
          freeDirective = size;
          break;

        default:
          THROW('Unsupported custom rule: ' + ident);
      }
    } else if (ruleName === 'targets') {
      parseTargets();
    } else if (ruleName === 'mode') {
      parseMode();
    } else {
      THROW('unknown @ rule [' + ruleName + ']');
    }
    expectEol();
  }

  function compileJump(size) {
    ASSERT_LOG2('compileJump(' + size + '), mlPointer=', mlPointer);
    ASSERT(size > 0, 'dont call this function on size=0');
    switch (size) {
      case 0:
        break; // ignore. only expliclty illustrates no free space
      case 1:
        encode8bit(ML_NOOP);
        break;
      case 2:
        encode8bit(ML_NOOP2);
        encode8bit(0);
        break;
      case 3:
        encode8bit(ML_NOOP3);
        encode8bit(0);
        encode8bit(0);
        break;
      case 4:
        encode8bit(ML_NOOP4);
        encode8bit(0);
        encode8bit(0);
        encode8bit(0);
        break;
      default:
        // because we manually update mlPointer the buffer may not grow accordingly. so do that immediately
        grow(mlPointer + size + 1); // 1 for opcode
        if (size < 0xffff) {
          encode8bit(ML_JMP);
          encode16bit(size - SIZEOF_V);
          mlPointer += size - SIZEOF_V;
        } else {
          encode8bit(ML_JMP32);
          encode32bit(size - SIZEOF_W);
          mlPointer += size - SIZEOF_W;
        }
        // buffer is explicitly fill(0)'d so no need to clear it out here (otherwise we probably should)
    }
  }

  function parseVarStrat() {
    let json = readLineRest();
    if (/\w+/.test(json)) problem.input.varstrat = json;
    else problem.input.varstrat = JSON.parse(json);
  }

  function parseValStrat() {
    problem.input.valstrat = parseIdentifier();
  }

  function parseRestCustom() {
    skipWhitespaces();
    if (read() === $$EQ) {
      skip();
      skipWhitespaces();
    }

    return readLineRest();
  }

  function parseTargets() {
    skipWhitespaces();
    if (read() === $$EQ) {
      skip();
      skipWhitespaces();
    }

    THROW('implement me (targeted vars)');
    if (read() === $$a && readD(1) === $$l && readD(2) === $$l) {
      dslPointer += 3;
      this.solver.config.targetedVars = 'all';
    } else {
      is($$LEFTPAREN);
      let idents = parseIdentList();
      this.solver.config.targetedVars = idents;
      is($$RIGHTPAREN);
    }
    expectEol();
  }

  function parseMode() {
    skipWhitespaces();
    if (read() === $$EQ) {
      skip();
      skipWhitespaces();
    }

    let mode = parseIdentifier();

    if (mode === 'constraints') {
      // input consists of high level constraints. generate low level optimizations.
    } else if (mode === 'propagators') {
      // input consists of low level constraints. try not to generate more.
    } else {
      THROW('unsupported mode: ' + mode);
    }
  }

  function THROW(msg) {
    if (_debug) {
      ASSERT_LOG2(dslBuf.slice(0, dslPointer).toString('binary') + '##|PARSER_IS_HERE[' + msg + ']|##' + dslBuf.slice(dslPointer).toString('binary'));
    }
    msg += ', source at ' + dslPointer + ' #|#: `' + dslBuf.slice(Math.max(0, dslPointer - 20), dslPointer).toString('binary') + '#|#' + dslBuf.slice(dslPointer, Math.min(dslBuf.length, dslPointer + 20)).toString('binary') + '`';
    throw new Error(msg);
  }
}

// BODY_STOP

export {
  dslToMl,
};
