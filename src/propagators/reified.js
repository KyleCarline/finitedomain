import {
  LOG_FLAG_PROPSTEPS,

  ASSERT,
  ASSERT_LOG,
  ASSERT_NORDOM,
} from '../helpers';

import {
  domain__debug,
  domain_createRange,
  domain_createValue,
  domain_getValue,
} from '../domain';

// BODY_START

let REIFIER_FAIL = 0;
let REIFIER_PASS = 1;

/**
 * A boolean variable that represents whether a comparison
 * condition between two variables currently holds or not.
 *
 * @param {$space} space
 * @param {$config} config
 * @param {number} leftVarIndex
 * @param {number} rightVarIndex
 * @param {number} resultVarIndex
 * @param {Function} opFunc like propagator_ltStepBare
 * @param {Function} nopFunc opposite of opFunc like propagator_gtStepBare
 * @param {string} opName
 * @param {string} invOpName
 * @param {Function} opRejectChecker
 * @param {Function} nopRejectChecker
 */
function propagator_reifiedStepBare(space, config, leftVarIndex, rightVarIndex, resultVarIndex, opFunc, nopFunc, opName, invOpName, opRejectChecker, nopRejectChecker) {
  ASSERT(space._class === '$space', 'SPACE_SHOULD_BE_SPACE');
  ASSERT(typeof leftVarIndex === 'number', 'VAR_INDEX_SHOULD_BE_NUMBER');
  ASSERT(typeof rightVarIndex === 'number', 'VAR_INDEX_SHOULD_BE_NUMBER');
  ASSERT(typeof resultVarIndex === 'number', 'VAR_INDEX_SHOULD_BE_NUMBER');
  ASSERT(typeof opName === 'string', 'OP_SHOULD_BE_STRING');
  ASSERT(typeof invOpName === 'string', 'NOP_SHOULD_BE_STRING');

  let vardoms = space.vardoms;
  let domResult = vardoms[resultVarIndex];

  ASSERT_LOG(LOG_FLAG_PROPSTEPS, log => log('propagator_reifiedStepBare; op:', opName, 'indexes:', leftVarIndex, rightVarIndex, resultVarIndex, 'doms before:', domain__debug(vardoms[leftVarIndex]), '?=' + opName, domain__debug(vardoms[rightVarIndex]), '->', domain__debug(vardoms[resultVarIndex])));

  let value = domain_getValue(domResult);
  ASSERT(value === REIFIER_FAIL || value === REIFIER_PASS || domResult === domain_createRange(0, 1), 'RESULT_DOM_SHOULD_BE_BOOL_BOUND [was' + domResult + ']');

  if (value === REIFIER_FAIL) {
    nopFunc(space, config, leftVarIndex, rightVarIndex);
  } else if (value === REIFIER_PASS) {
    opFunc(space, config, leftVarIndex, rightVarIndex);
  } else {
    let domain1 = vardoms[leftVarIndex];
    let domain2 = vardoms[rightVarIndex];

    ASSERT_NORDOM(domain1);
    ASSERT_NORDOM(domain2);
    ASSERT(domain1 && domain2, 'SHOULD_NOT_BE_REJECTED');
    ASSERT(domResult === domain_createRange(0, 1), 'result should be bool now because we already asserted it was either zero one or bool and it wasnt zero or one');

    if (nopRejectChecker(domain1, domain2)) {
      ASSERT(!opRejectChecker(domain1, domain2), 'with non-empty domains op and nop cant BOTH reject');
      vardoms[resultVarIndex] = domain_createValue(REIFIER_PASS);
      opFunc(space, config, leftVarIndex, rightVarIndex);
    } else if (opRejectChecker(domain1, domain2)) {
      vardoms[resultVarIndex] = domain_createValue(REIFIER_FAIL);
      nopFunc(space, config, leftVarIndex, rightVarIndex);
    }
  }

  ASSERT_LOG(LOG_FLAG_PROPSTEPS, log => log('propagator_reifiedStepBare; doms after:', domain__debug(vardoms[leftVarIndex]), '?=' + opName, domain__debug(vardoms[rightVarIndex]), '->', domain__debug(vardoms[resultVarIndex])));
  ASSERT_NORDOM(space.vardoms[leftVarIndex], true, domain__debug);
  ASSERT_NORDOM(space.vardoms[rightVarIndex], true, domain__debug);
  ASSERT_NORDOM(space.vardoms[resultVarIndex], true, domain__debug);
}

// BODY_STOP

export default propagator_reifiedStepBare;
