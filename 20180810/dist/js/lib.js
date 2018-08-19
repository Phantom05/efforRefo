"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wq = wq;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pi = exports.pi = Math.PI;

function wq(x) {
  return x * x;
}

var Person = exports.Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};