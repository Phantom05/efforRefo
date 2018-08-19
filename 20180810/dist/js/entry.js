'use strict';

var _hello = require('./hello');

var _hello2 = _interopRequireDefault(_hello);

var _world = require('./world');

var _world2 = _interopRequireDefault(_world);

var _test = require('./components/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _test2.default)();
document.getElementById('demo').innerHTML = _hello2.default + ', ' + _world2.default + '!!!!!';