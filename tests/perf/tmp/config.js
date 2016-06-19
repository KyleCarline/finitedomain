// this is exported from the "// h w/ unbalanced tail" test in constraints.coffee in multiverse

var config = module.exports = {
  _class: '$config',
  var_filter_func: 'unsolved',
  nextVarStrat: 'naive',
  next_value_func: 'min',
  targetedVars: ['ITEM_INDEX',
    'ITEM_INDEX&n=1',
    'ITEM_INDEX&n=2',
    'ITEM_INDEX&n=3',
    'ITEM_INDEX&n=4',
    'ITEM_INDEX&n=5',
    'ITEM_INDEX&n=6',
    'width',
    'width&n=1',
    'width&n=2',
    'width&n=3',
    'width&n=4',
    'width&n=5',
    'width&n=6',
    '_ROOT_BRANCH_',
    'SECTION',
    'color',
    'post_type',
    'state',
    'SECTION&n=1',
    'color&n=1',
    'post_type&n=1',
    'state&n=1',
    'SECTION&n=2',
    'color&n=2',
    'post_type&n=2',
    'state&n=2',
    'SECTION&n=3',
    'color&n=3',
    'post_type&n=3',
    'state&n=3',
    'SECTION&n=4',
    'color&n=4',
    'post_type&n=4',
    'state&n=4',
    'SECTION&n=5',
    'color&n=5',
    'post_type&n=5',
    'state&n=5',
    'SECTION&n=6',
    'color&n=6',
    'post_type&n=6',
    'state&n=6',
    'VERSE_INDEX',
    'VERSE_INDEX&n=1',
    'VERSE_INDEX&n=2',
    'VERSE_INDEX&n=3',
    'VERSE_INDEX&n=4',
    'VERSE_INDEX&n=5',
    'VERSE_INDEX&n=6',
    '144',
    '145',
    '146',
    '147',
    '148',
    '149',
    '150',
    '152',
    '154',
    '156',
    '158',
    '160',
    '162',
    '163',
    '164',
    '165',
    '166',
    '167',
    '168',
    '169',
    '170',
    '172',
    '174',
    '176',
    '178',
    '180',
    '182',
    '184',
    '186',
    '188',
    '190',
    '192',
    '194',
    '196',
    '198',
    '200',
    '202',
    '204',
    '206',
    '208',
    '258',
    '259',
    '260',
    '261',
    '262',
    '263',
    '264',
    '266',
    '268',
    '270',
    '272',
    '274'],
  targetedIndexes: [9,
    18,
    25,
    32,
    39,
    46,
    53,
    12,
    19,
    26,
    33,
    40,
    47,
    54,
    1,
    2,
    13,
    14,
    15,
    16,
    20,
    21,
    22,
    23,
    27,
    28,
    29,
    30,
    34,
    35,
    36,
    37,
    41,
    42,
    43,
    44,
    48,
    49,
    50,
    51,
    55,
    56,
    57,
    7,
    17,
    24,
    31,
    38,
    45,
    52,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    152,
    154,
    156,
    158,
    160,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    172,
    174,
    176,
    178,
    180,
    182,
    184,
    186,
    188,
    190,
    192,
    194,
    196,
    198,
    200,
    202,
    204,
    206,
    208,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    266,
    268,
    270,
    272,
    274],
  var_dist_options: {
    width: {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=1': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=2': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=3': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=4': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=5': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'},
    'width&n=6': {list: [4, 3, 2, 1, 5, 6, 7, 8], distributor_name: 'list'}
  },
  timeout_callback: undefined,
  all_var_names: ['0',
    '_ROOT_BRANCH_',
    'SECTION',
    '3',
    '4',
    '5',
    '6',
    'VERSE_INDEX',
    '8',
    'ITEM_INDEX',
    '10',
    '11',
    'width',
    'color',
    'post_type',
    'state',
    'SECTION&n=1',
    'VERSE_INDEX&n=1',
    'ITEM_INDEX&n=1',
    'width&n=1',
    'color&n=1',
    'post_type&n=1',
    'state&n=1',
    'SECTION&n=2',
    'VERSE_INDEX&n=2',
    'ITEM_INDEX&n=2',
    'width&n=2',
    'color&n=2',
    'post_type&n=2',
    'state&n=2',
    'SECTION&n=3',
    'VERSE_INDEX&n=3',
    'ITEM_INDEX&n=3',
    'width&n=3',
    'color&n=3',
    'post_type&n=3',
    'state&n=3',
    'SECTION&n=4',
    'VERSE_INDEX&n=4',
    'ITEM_INDEX&n=4',
    'width&n=4',
    'color&n=4',
    'post_type&n=4',
    'state&n=4',
    'SECTION&n=5',
    'VERSE_INDEX&n=5',
    'ITEM_INDEX&n=5',
    'width&n=5',
    'color&n=5',
    'post_type&n=5',
    'state&n=5',
    'SECTION&n=6',
    'VERSE_INDEX&n=6',
    'ITEM_INDEX&n=6',
    'width&n=6',
    'color&n=6',
    'post_type&n=6',
    'state&n=6',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '100',
    '101',
    '102',
    '103',
    '104',
    '105',
    '106',
    '107',
    '108',
    '109',
    '110',
    '111',
    '112',
    '113',
    '114',
    '115',
    '116',
    '117',
    '118',
    '119',
    '120',
    '121',
    '122',
    '123',
    '124',
    '125',
    '126',
    '127',
    '128',
    '129',
    '130',
    '131',
    '132',
    '133',
    '134',
    '135',
    '136',
    '137',
    '138',
    '139',
    '140',
    '141',
    '142',
    '143',
    '144',
    '145',
    '146',
    '147',
    '148',
    '149',
    '150',
    '151',
    '152',
    '153',
    '154',
    '155',
    '156',
    '157',
    '158',
    '159',
    '160',
    '161',
    '162',
    '163',
    '164',
    '165',
    '166',
    '167',
    '168',
    '169',
    '170',
    '171',
    '172',
    '173',
    '174',
    '175',
    '176',
    '177',
    '178',
    '179',
    '180',
    '181',
    '182',
    '183',
    '184',
    '185',
    '186',
    '187',
    '188',
    '189',
    '190',
    '191',
    '192',
    '193',
    '194',
    '195',
    '196',
    '197',
    '198',
    '199',
    '200',
    '201',
    '202',
    '203',
    '204',
    '205',
    '206',
    '207',
    '208',
    '209',
    '210',
    '211',
    '212',
    '213',
    '214',
    '215',
    '216',
    '217',
    '218',
    '219',
    '220',
    '221',
    '222',
    '223',
    '224',
    '225',
    '226',
    '227',
    '228',
    '229',
    '230',
    '231',
    '232',
    '233',
    '234',
    '235',
    '236',
    '237',
    '238',
    '239',
    '240',
    '241',
    '242',
    '243',
    '244',
    '245',
    '246',
    '247',
    '248',
    '249',
    '250',
    '251',
    '252',
    '253',
    '254',
    '255',
    '256',
    '257',
    '258',
    '259',
    '260',
    '261',
    '262',
    '263',
    '264',
    '265',
    '266',
    '267',
    '268',
    '269',
    '270',
    '271',
    '272',
    '273',
    '274'],
  all_constraints: [
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [1, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [2, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [7, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [9, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [12, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [13, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [14, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [15, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [16, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [17, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [18, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [19, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [20, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [21, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [22, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [23, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [24, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [25, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [26, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [27, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [28, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [29, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [30, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [31, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [32, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [33, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [34, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [35, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [36, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [37, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [38, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [39, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [40, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [41, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [42, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [43, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [44, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [45, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [46, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [47, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [48, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [49, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [50, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [51, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [52, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [53, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [54, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [55, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [56, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'gte',
      varIndexes: [57, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'distinct',
      varIndexes: [9, 18, 25, 32, 39, 46, 53],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [7, 4, 58],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [9, 0, 59],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [59, 58],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 4, 60],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 0, 61],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [61, 60],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 4, 62],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 0, 63],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [63, 62],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 4, 64],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 0, 65],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [65, 64],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 4, 66],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 0, 67],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [67, 66],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [7, 0, 68],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [9, 3, 69],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [69, 68],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 0, 70],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 3, 71],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [71, 70],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 0, 72],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 3, 73],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [73, 72],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 0, 74],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 3, 75],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [75, 74],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 0, 76],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 3, 77],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [77, 76],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 0, 78],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 3, 79],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [79, 78],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [7, 6, 80],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [9, 8, 81],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [81, 80],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 6, 82],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 8, 83],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [83, 82],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 6, 84],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 8, 85],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [85, 84],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 6, 86],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 8, 87],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [87, 86],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 6, 88],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 8, 89],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [89, 88],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 6, 90],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 8, 91],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [91, 90],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [52, 6, 92],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [53, 8, 93],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [93, 92],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [7, 5, 94],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [9, 4, 95],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [95, 94],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 5, 96],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 4, 97],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [97, 96],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 5, 98],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 4, 99],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [99, 98],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 5, 100],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 4, 101],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [101, 100],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 5, 102],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 4, 103],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [103, 102],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 5, 104],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 4, 105],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [105, 104],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [52, 5, 106],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [53, 4, 107],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [107, 106],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [7, 3, 108],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [9, 5, 109],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [109, 108],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 3, 110],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 5, 111],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [111, 110],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 3, 112],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 5, 113],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [113, 112],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 3, 114],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 5, 115],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [115, 114],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 3, 116],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 5, 117],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [117, 116],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 3, 118],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 5, 119],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [119, 118],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [52, 3, 120],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [53, 5, 121],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [121, 120],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [17, 10, 122],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [18, 10, 123],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [123, 122],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 10, 124],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 10, 125],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [125, 124],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 10, 126],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 10, 127],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [127, 126],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 10, 128],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 10, 129],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [129, 128],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 10, 130],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 10, 131],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [131, 130],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [52, 10, 132],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [53, 10, 133],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [133, 132],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [24, 8, 134],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [25, 6, 135],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [135, 134],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [31, 8, 136],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [32, 6, 137],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [137, 136],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [38, 8, 138],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [39, 6, 139],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [139, 138],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [45, 8, 140],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [46, 6, 141],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [141, 140],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [52, 8, 142],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [53, 6, 143],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [143, 142],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [12, 8, 144],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [19, 8, 145],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [26, 8, 146],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [33, 8, 147],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [40, 8, 148],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [47, 8, 149],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [54, 8, 150],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [144, 145],
      param: 151
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [151, 3, 152],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [145, 146],
      param: 153
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [153, 3, 154],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [146, 147],
      param: 155
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [155, 3, 156],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [147, 148],
      param: 157
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [157, 3, 158],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [148, 149],
      param: 159
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [159, 3, 160],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [149, 150],
      param: 161
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [161, 3, 162],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [12, 4, 164],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [19, 4, 165],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [26, 4, 166],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [33, 4, 167],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [40, 4, 168],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [47, 4, 169],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [54, 4, 170],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [164, 165, 166],
      param: 171
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [171, 8, 172],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [165, 166, 167],
      param: 173
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [173, 8, 174],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [166, 167, 168],
      param: 175
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [175, 8, 176],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [167, 168, 169],
      param: 177
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [177, 8, 178],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [168, 169, 170],
      param: 179
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [179, 8, 180],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [163, 163],
      param: 181
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [181, 0, 182],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 163],
      param: 183
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [183, 0, 184],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [154, 172],
      param: 185
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [185, 0, 186],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [156, 174],
      param: 187
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [187, 0, 188],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [158, 176],
      param: 189
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [189, 0, 190],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [160, 178],
      param: 191
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [191, 0, 192],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [162, 180],
      param: 193
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [193, 0, 194],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 172],
      param: 195
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [195, 0, 196],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [154, 174],
      param: 197
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [197, 0, 198],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [156, 176],
      param: 199
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [199, 0, 200],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [158, 178],
      param: 201
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [201, 0, 202],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [160, 180],
      param: 203
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [203, 0, 204],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [162, 163],
      param: 205
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [205, 0, 206],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [163, 163],
      param: 207
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [207, 0, 208],
      param: 'gte'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152],
      param: 209
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172],
      param: 210
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [209, 210, 211],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152],
      param: 212
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172],
      param: 213
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [213, 0, 214],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [212, 214, 215],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [211, 215],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154],
      param: 216
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174],
      param: 217
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [216, 217, 218],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154],
      param: 219
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174],
      param: 220
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [220, 0, 221],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [219, 221, 222],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [218, 222],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156],
      param: 223
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176],
      param: 224
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [223, 224, 225],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156],
      param: 226
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176],
      param: 227
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [227, 0, 228],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [226, 228, 229],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [225, 229],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158],
      param: 230
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178],
      param: 231
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [230, 231, 232],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158],
      param: 233
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178],
      param: 234
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [234, 0, 235],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [233, 235, 236],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [232, 236],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160],
      param: 237
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180],
      param: 238
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [237, 238, 239],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160],
      param: 240
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180],
      param: 241
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [241, 0, 242],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [240, 242, 243],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [239, 243],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160, 162],
      param: 244
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180, 163],
      param: 245
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [244, 245, 246],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160, 162],
      param: 247
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180, 163],
      param: 248
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [248, 0, 249],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [247, 249, 250],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [246, 250],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160, 162, 163],
      param: 251
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180, 163, 163],
      param: 252
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [251, 252, 253],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [152, 154, 156, 158, 160, 162, 163],
      param: 254
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [172, 174, 176, 178, 180, 163, 163],
      param: 255
    },
    {
      _class: '$constraint',
      name: 'plus',
      varIndexes: [255, 0, 256],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [254, 256, 257],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'neq',
      varIndexes: [253, 257],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [12, 3, 258],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [19, 3, 259],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [26, 3, 260],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [33, 3, 261],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [40, 3, 262],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [47, 3, 263],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [54, 3, 264],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [258, 198],
      param: 265
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [265, 3, 266],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [259, 200],
      param: 267
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [267, 3, 268],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [260, 202],
      param: 269
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [269, 3, 270],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [261, 204],
      param: 271
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [271, 3, 272],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'sum',
      varIndexes: [262, 206],
      param: 273
    },
    {
      _class: '$constraint',
      name: 'reifier',
      varIndexes: [273, 3, 274],
      param: 'eq'
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [266, 0],
      param: undefined
    },
    {
      _class: '$constraint',
      name: 'eq',
      varIndexes: [272, 0],
      param: undefined
    },
  ],
  constant_cache: {
    '0': '163',
    '1': '0',
    '2': '3',
    '3': '8',
    '4': '4',
    '5': '5',
    '6': '10',
    '7': '6',
    '8': '11'
  },
  initial_domains: [
    [1, 1],
    [0, 1],
    [1, 1],
    [2, 2],
    [4, 4],
    [5, 5],
    [7, 7],
    [1, 2, 4, 5, 7, 7],
    [3, 3],
    [1, 5],
    [6, 6],
    [8, 8],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2, 4, 7],
    [1, 6],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 7],
    [1, 7],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 7],
    [1, 7],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 7],
    [1, 7],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 3, 5, 7],
    [2, 7],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 1],
    [2, 3, 5, 7],
    [3, 7],
    [1, 8],
    [1, 2],
    [1, 2],
    [1, 2],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 0],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 100000000],
    [0, 100000000],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
    [0, 100000000],
    [0, 1],
  ],
};
