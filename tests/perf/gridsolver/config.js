/*
 For HeatFiler:

 first do `grunt perfheat` for a beautified concat build
 Go to heatfiler (on localhost, just clone it, no install needed)
 - go to `http://localhost/heatfiler/src/#run,code,here`
 - select files
 - enter the snippet below
 - press start
 - wait until the spinner spins again (can take a while...), reduce the max to make this go faster

 @ console.log('starting now...');
 @ var exports = {};
 @ var module = {exports: {}};
 + http://localhost/path/to/finitedomain/dist/browser.js
 - http://localhost/path/to/finitedomain/tests/perf/gridsolver/config.js
 - http://localhost/path/to/finitedomain/tests/perf/perf.js
 @ perf(config, 1);

*/

var config = module.exports = {
  callbackTimeoutMax: 10000000,

  _class: '$config',
  varStratConfig: {type: 'naive'},
  valueStratName: 'min',
  targetedVars: 'all',
  var_dist_options: {},
  timeout_callback: undefined,
  constant_cache: {
    '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10'
  },
  all_var_names: ['1', '_ROOT_BRANCH_', 'SECTION', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'ITEM', 'COMPONENT', 'inlets', '11', '12', 'inlets&n=1', '13', '14', 'inlets&n=2', '15', '16', 'inlets&n=3', '17', '18', 'inlets&n=4', '19', '20', 'COMPONENT_START', 'COMPONENT_END', 'SECTION&n=1', 'ITEM&n=1', 'COMPONENT&n=1', 'inlets&n=5', '21', '22', 'inlets&n=6', '23', '24', 'inlets&n=7', '25', '26', 'inlets&n=8', '27', '28', 'inlets&n=9', '29', '30', 'COMPONENT_START&n=1', 'COMPONENT_END&n=1', 'SECTION&n=2', 'ITEM&n=2', 'COMPONENT&n=2', 'inlets&n=10', '31', '32', 'inlets&n=11', '33', '34', 'inlets&n=12', '35', '36', 'inlets&n=13', '37', '38', 'inlets&n=14', '39', '40', 'COMPONENT_START&n=2', 'COMPONENT_END&n=2', 'SECTION&n=3', 'ITEM&n=3', 'COMPONENT&n=3', 'inlets&n=15', '41', '42', 'inlets&n=16', '43', '44', 'inlets&n=17', '45', '46', 'inlets&n=18', '47', '48', 'inlets&n=19', '49', '50', 'COMPONENT_START&n=3', 'COMPONENT_END&n=3', 'SECTION&n=4', 'ITEM&n=4', 'COMPONENT&n=4', 'inlets&n=20', '51', '52', 'inlets&n=21', '53', '54', 'inlets&n=22', '55', '56', 'inlets&n=23', '57', '58', 'inlets&n=24', '59', '60', 'COMPONENT_START&n=4', 'COMPONENT_END&n=4', 'SECTION&n=5', 'ITEM&n=5', 'COMPONENT&n=5', 'inlets&n=25', '61', '62', 'inlets&n=26', '63', '64', 'inlets&n=27', '65', '66', 'inlets&n=28', '67', '68', 'inlets&n=29', '69', '70', 'COMPONENT_START&n=5', 'COMPONENT_END&n=5', 'SECTION&n=6', 'ITEM&n=6', 'COMPONENT&n=6', 'inlets&n=30', '71', '72', 'inlets&n=31', '73', '74', 'inlets&n=32', '75', '76', 'inlets&n=33', '77', '78', 'inlets&n=34', '79', '80', 'COMPONENT_START&n=6', 'COMPONENT_END&n=6', 'SECTION&n=7', 'ITEM&n=7', 'COMPONENT&n=7', 'inlets&n=35', '81', '82', 'inlets&n=36', '83', '84', 'inlets&n=37', '85', '86', 'inlets&n=38', '87', '88', 'inlets&n=39', '89', '90', 'COMPONENT_START&n=7', 'COMPONENT_END&n=7', 'SECTION&n=8', 'ITEM&n=8', 'COMPONENT&n=8', 'inlets&n=40', '91', '92', 'inlets&n=41', '93', '94', 'inlets&n=42', '95', '96', 'inlets&n=43', '97', '98', 'inlets&n=44', '99', '100', 'COMPONENT_START&n=8', 'COMPONENT_END&n=8'],
  initial_vars: {
    '1': [1, 1],
    '2': [2, 2],
    '3': [3, 3],
    '4': [4, 4],
    '5': [5, 5],
    '6': [6, 6],
    '7': [7, 7],
    '8': [8, 8],
    '9': [9, 9],
    '10': [10, 10],
    '11': [0, 1],
    '12': [0, 1],
    '13': [0, 1],
    '14': [0, 1],
    '15': [0, 1],
    '16': [0, 1],
    '17': [0, 1],
    '18': [0, 1],
    '19': [0, 1],
    '20': [0, 1],
    '21': [0, 1],
    '22': [0, 1],
    '23': [0, 1],
    '24': [0, 1],
    '25': [0, 1],
    '26': [0, 1],
    '27': [0, 1],
    '28': [0, 1],
    '29': [0, 1],
    '30': [0, 1],
    '31': [0, 1],
    '32': [0, 1],
    '33': [0, 1],
    '34': [0, 1],
    '35': [0, 1],
    '36': [0, 1],
    '37': [0, 1],
    '38': [0, 1],
    '39': [0, 1],
    '40': [0, 1],
    '41': [0, 1],
    '42': [0, 1],
    '43': [0, 1],
    '44': [0, 1],
    '45': [0, 1],
    '46': [0, 1],
    '47': [0, 1],
    '48': [0, 1],
    '49': [0, 1],
    '50': [0, 1],
    '51': [0, 1],
    '52': [0, 1],
    '53': [0, 1],
    '54': [0, 1],
    '55': [0, 1],
    '56': [0, 1],
    '57': [0, 1],
    '58': [0, 1],
    '59': [0, 1],
    '60': [0, 1],
    '61': [0, 1],
    '62': [0, 1],
    '63': [0, 1],
    '64': [0, 1],
    '65': [0, 1],
    '66': [0, 1],
    '67': [0, 1],
    '68': [0, 1],
    '69': [0, 1],
    '70': [0, 1],
    '71': [0, 1],
    '72': [0, 1],
    '73': [0, 1],
    '74': [0, 1],
    '75': [0, 1],
    '76': [0, 1],
    '77': [0, 1],
    '78': [0, 1],
    '79': [0, 1],
    '80': [0, 1],
    '81': [0, 1],
    '82': [0, 1],
    '83': [0, 1],
    '84': [0, 1],
    '85': [0, 1],
    '86': [0, 1],
    '87': [0, 1],
    '88': [0, 1],
    '89': [0, 1],
    '90': [0, 1],
    '91': [0, 1],
    '92': [0, 1],
    '93': [0, 1],
    '94': [0, 1],
    '95': [0, 1],
    '96': [0, 1],
    '97': [0, 1],
    '98': [0, 1],
    '99': [0, 1],
    '100': [0, 1],
    _ROOT_BRANCH_: [0, 1],
    SECTION: [1, 1],
    ITEM: [2, 10],
    COMPONENT: [1, 5],
    inlets: [0, 1],
    'inlets&n=1': [0, 1],
    'inlets&n=2': [0, 1],
    'inlets&n=3': [0, 1],
    'inlets&n=4': [0, 1],
    COMPONENT_START: [0, 1],
    COMPONENT_END: [0, 1],
    'SECTION&n=1': [1, 1],
    'ITEM&n=1': [2, 10],
    'COMPONENT&n=1': [1, 5],
    'inlets&n=5': [0, 1],
    'inlets&n=6': [0, 1],
    'inlets&n=7': [0, 1],
    'inlets&n=8': [0, 1],
    'inlets&n=9': [0, 1],
    'COMPONENT_START&n=1': [0, 1],
    'COMPONENT_END&n=1': [0, 1],
    'SECTION&n=2': [1, 1],
    'ITEM&n=2': [2, 10],
    'COMPONENT&n=2': [1, 5],
    'inlets&n=10': [0, 1],
    'inlets&n=11': [0, 1],
    'inlets&n=12': [0, 1],
    'inlets&n=13': [0, 1],
    'inlets&n=14': [0, 1],
    'COMPONENT_START&n=2': [0, 1],
    'COMPONENT_END&n=2': [0, 1],
    'SECTION&n=3': [1, 1],
    'ITEM&n=3': [2, 10],
    'COMPONENT&n=3': [1, 5],
    'inlets&n=15': [0, 1],
    'inlets&n=16': [0, 1],
    'inlets&n=17': [0, 1],
    'inlets&n=18': [0, 1],
    'inlets&n=19': [0, 1],
    'COMPONENT_START&n=3': [0, 1],
    'COMPONENT_END&n=3': [0, 1],
    'SECTION&n=4': [1, 1],
    'ITEM&n=4': [2, 10],
    'COMPONENT&n=4': [1, 5],
    'inlets&n=20': [0, 1],
    'inlets&n=21': [0, 1],
    'inlets&n=22': [0, 1],
    'inlets&n=23': [0, 1],
    'inlets&n=24': [0, 1],
    'COMPONENT_START&n=4': [0, 1],
    'COMPONENT_END&n=4': [0, 1],
    'SECTION&n=5': [1, 1],
    'ITEM&n=5': [2, 10],
    'COMPONENT&n=5': [1, 5],
    'inlets&n=25': [0, 1],
    'inlets&n=26': [0, 1],
    'inlets&n=27': [0, 1],
    'inlets&n=28': [0, 1],
    'inlets&n=29': [0, 1],
    'COMPONENT_START&n=5': [0, 1],
    'COMPONENT_END&n=5': [0, 1],
    'SECTION&n=6': [1, 1],
    'ITEM&n=6': [2, 10],
    'COMPONENT&n=6': [1, 5],
    'inlets&n=30': [0, 1],
    'inlets&n=31': [0, 1],
    'inlets&n=32': [0, 1],
    'inlets&n=33': [0, 1],
    'inlets&n=34': [0, 1],
    'COMPONENT_START&n=6': [0, 1],
    'COMPONENT_END&n=6': [0, 1],
    'SECTION&n=7': [1, 1],
    'ITEM&n=7': [2, 10],
    'COMPONENT&n=7': [1, 5],
    'inlets&n=35': [0, 1],
    'inlets&n=36': [0, 1],
    'inlets&n=37': [0, 1],
    'inlets&n=38': [0, 1],
    'inlets&n=39': [0, 1],
    'COMPONENT_START&n=7': [0, 1],
    'COMPONENT_END&n=7': [0, 1],
    'SECTION&n=8': [1, 1],
    'ITEM&n=8': [2, 10],
    'COMPONENT&n=8': [1, 5],
    'inlets&n=40': [0, 1],
    'inlets&n=41': [0, 1],
    'inlets&n=42': [0, 1],
    'inlets&n=43': [0, 1],
    'inlets&n=44': [0, 1],
    'COMPONENT_START&n=8': [0, 1],
    'COMPONENT_END&n=8': [0, 1]
  },
  propagatorsOnName: [['eq', ['_ROOT_BRANCH_', '1']],
    ['lte', ['1', 'SECTION']],
    ['lte', ['1', 'ITEM']],
    ['lte', ['1', 'COMPONENT']],
    ['reified', ['inlets', '1', '11'], 'gte', 'lt'],
    ['reified', ['COMPONENT', '1', '12'], 'eq', 'neq'],
    ['eq', ['11', '12']],
    ['reified', ['inlets&n=1', '1', '13'], 'gte', 'lt'],
    ['reified', ['COMPONENT', '2', '14'], 'eq', 'neq'],
    ['eq', ['13', '14']],
    ['reified', ['inlets&n=2', '1', '15'], 'gte', 'lt'],
    ['reified', ['COMPONENT', '3', '16'], 'eq', 'neq'],
    ['eq', ['15', '16']],
    ['reified', ['inlets&n=3', '1', '17'], 'gte', 'lt'],
    ['reified', ['COMPONENT', '4', '18'], 'eq', 'neq'],
    ['eq', ['17', '18']],
    ['reified', ['inlets&n=4', '1', '19'], 'gte', 'lt'],
    ['reified', ['COMPONENT', '5', '20'], 'eq', 'neq'],
    ['eq', ['19', '20']],
    ['lte', ['1', 'SECTION&n=1']],
    ['lte', ['1', 'ITEM&n=1']],
    ['lte', ['1', 'COMPONENT&n=1']],
    ['reified', ['inlets&n=5', '1', '21'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=1', '1', '22'], 'eq', 'neq'],
    ['eq', ['21', '22']],
    ['reified', ['inlets&n=6', '1', '23'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=1', '2', '24'], 'eq', 'neq'],
    ['eq', ['23', '24']],
    ['reified', ['inlets&n=7', '1', '25'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=1', '3', '26'], 'eq', 'neq'],
    ['eq', ['25', '26']],
    ['reified', ['inlets&n=8', '1', '27'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=1', '4', '28'], 'eq', 'neq'],
    ['eq', ['27', '28']],
    ['reified', ['inlets&n=9', '1', '29'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=1', '5', '30'], 'eq', 'neq'],
    ['eq', ['29', '30']],
    ['lte', ['1', 'SECTION&n=2']],
    ['lte', ['1', 'ITEM&n=2']],
    ['lte', ['1', 'COMPONENT&n=2']],
    ['reified', ['inlets&n=10', '1', '31'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=2', '1', '32'], 'eq', 'neq'],
    ['eq', ['31', '32']],
    ['reified', ['inlets&n=11', '1', '33'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=2', '2', '34'], 'eq', 'neq'],
    ['eq', ['33', '34']],
    ['reified', ['inlets&n=12', '1', '35'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=2', '3', '36'], 'eq', 'neq'],
    ['eq', ['35', '36']],
    ['reified', ['inlets&n=13', '1', '37'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=2', '4', '38'], 'eq', 'neq'],
    ['eq', ['37', '38']],
    ['reified', ['inlets&n=14', '1', '39'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=2', '5', '40'], 'eq', 'neq'],
    ['eq', ['39', '40']],
    ['lte', ['1', 'SECTION&n=3']],
    ['lte', ['1', 'ITEM&n=3']],
    ['lte', ['1', 'COMPONENT&n=3']],
    ['reified', ['inlets&n=15', '1', '41'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=3', '1', '42'], 'eq', 'neq'],
    ['eq', ['41', '42']],
    ['reified', ['inlets&n=16', '1', '43'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=3', '2', '44'], 'eq', 'neq'],
    ['eq', ['43', '44']],
    ['reified', ['inlets&n=17', '1', '45'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=3', '3', '46'], 'eq', 'neq'],
    ['eq', ['45', '46']],
    ['reified', ['inlets&n=18', '1', '47'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=3', '4', '48'], 'eq', 'neq'],
    ['eq', ['47', '48']],
    ['reified', ['inlets&n=19', '1', '49'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=3', '5', '50'], 'eq', 'neq'],
    ['eq', ['49', '50']],
    ['lte', ['1', 'SECTION&n=4']],
    ['lte', ['1', 'ITEM&n=4']],
    ['lte', ['1', 'COMPONENT&n=4']],
    ['reified', ['inlets&n=20', '1', '51'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=4', '1', '52'], 'eq', 'neq'],
    ['eq', ['51', '52']],
    ['reified', ['inlets&n=21', '1', '53'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=4', '2', '54'], 'eq', 'neq'],
    ['eq', ['53', '54']],
    ['reified', ['inlets&n=22', '1', '55'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=4', '3', '56'], 'eq', 'neq'],
    ['eq', ['55', '56']],
    ['reified', ['inlets&n=23', '1', '57'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=4', '4', '58'], 'eq', 'neq'],
    ['eq', ['57', '58']],
    ['reified', ['inlets&n=24', '1', '59'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=4', '5', '60'], 'eq', 'neq'],
    ['eq', ['59', '60']],
    ['lte', ['1', 'SECTION&n=5']],
    ['lte', ['1', 'ITEM&n=5']],
    ['lte', ['1', 'COMPONENT&n=5']],
    ['reified', ['inlets&n=25', '1', '61'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=5', '1', '62'], 'eq', 'neq'],
    ['eq', ['61', '62']],
    ['reified', ['inlets&n=26', '1', '63'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=5', '2', '64'], 'eq', 'neq'],
    ['eq', ['63', '64']],
    ['reified', ['inlets&n=27', '1', '65'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=5', '3', '66'], 'eq', 'neq'],
    ['eq', ['65', '66']],
    ['reified', ['inlets&n=28', '1', '67'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=5', '4', '68'], 'eq', 'neq'],
    ['eq', ['67', '68']],
    ['reified', ['inlets&n=29', '1', '69'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=5', '5', '70'], 'eq', 'neq'],
    ['eq', ['69', '70']],
    ['lte', ['1', 'SECTION&n=6']],
    ['lte', ['1', 'ITEM&n=6']],
    ['lte', ['1', 'COMPONENT&n=6']],
    ['reified', ['inlets&n=30', '1', '71'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=6', '1', '72'], 'eq', 'neq'],
    ['eq', ['71', '72']],
    ['reified', ['inlets&n=31', '1', '73'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=6', '2', '74'], 'eq', 'neq'],
    ['eq', ['73', '74']],
    ['reified', ['inlets&n=32', '1', '75'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=6', '3', '76'], 'eq', 'neq'],
    ['eq', ['75', '76']],
    ['reified', ['inlets&n=33', '1', '77'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=6', '4', '78'], 'eq', 'neq'],
    ['eq', ['77', '78']],
    ['reified', ['inlets&n=34', '1', '79'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=6', '5', '80'], 'eq', 'neq'],
    ['eq', ['79', '80']],
    ['lte', ['1', 'SECTION&n=7']],
    ['lte', ['1', 'ITEM&n=7']],
    ['lte', ['1', 'COMPONENT&n=7']],
    ['reified', ['inlets&n=35', '1', '81'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=7', '1', '82'], 'eq', 'neq'],
    ['eq', ['81', '82']],
    ['reified', ['inlets&n=36', '1', '83'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=7', '2', '84'], 'eq', 'neq'],
    ['eq', ['83', '84']],
    ['reified', ['inlets&n=37', '1', '85'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=7', '3', '86'], 'eq', 'neq'],
    ['eq', ['85', '86']],
    ['reified', ['inlets&n=38', '1', '87'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=7', '4', '88'], 'eq', 'neq'],
    ['eq', ['87', '88']],
    ['reified', ['inlets&n=39', '1', '89'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=7', '5', '90'], 'eq', 'neq'],
    ['eq', ['89', '90']],
    ['lte', ['1', 'SECTION&n=8']],
    ['lte', ['1', 'ITEM&n=8']],
    ['lte', ['1', 'COMPONENT&n=8']],
    ['reified', ['inlets&n=40', '1', '91'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=8', '1', '92'], 'eq', 'neq'],
    ['eq', ['91', '92']],
    ['reified', ['inlets&n=41', '1', '93'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=8', '2', '94'], 'eq', 'neq'],
    ['eq', ['93', '94']],
    ['reified', ['inlets&n=42', '1', '95'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=8', '3', '96'], 'eq', 'neq'],
    ['eq', ['95', '96']],
    ['reified', ['inlets&n=43', '1', '97'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=8', '4', '98'], 'eq', 'neq'],
    ['eq', ['97', '98']],
    ['reified', ['inlets&n=44', '1', '99'], 'gte', 'lt'],
    ['reified', ['COMPONENT&n=8', '5', '100'], 'eq', 'neq'],
    ['eq', ['99', '100']],
  ],
};
