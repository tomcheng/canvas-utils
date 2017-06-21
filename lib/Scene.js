"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function Scene() {
  var _this = this;

  _classCallCheck(this, Scene);

  this.add = function (object) {
    _this.objects.push(object);
  };

  this.remove = function (object) {
    _this.objects = _this.objects.filter(function (o) {
      return o !== object;
    });
  };

  this.objects = [];
};

exports.default = Scene;