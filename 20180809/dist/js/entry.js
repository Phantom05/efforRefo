'use strict';

var _hello = require('./hello');

var _hello2 = _interopRequireDefault(_hello);

var _world = require('./world');

var _world2 = _interopRequireDefault(_world);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('demo').innerHTML = _hello2.default + ', ' + _world2.default + '!';