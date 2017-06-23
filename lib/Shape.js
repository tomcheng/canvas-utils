"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function Shape() {
  var _this = this;

  _classCallCheck(this, Shape);

  this.addEventListener = function (event, callback) {
    if (_this.callbacks[event]) {
      _this.callbacks[event].push(callback);
    } else {
      _this.callbacks[event] = [callback];
    }
  };

  this.callbacks = {};
};

exports.default = Shape;