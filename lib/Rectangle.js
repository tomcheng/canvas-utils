"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(_ref) {
  var _this = this;

  var width = _ref.width,
      height = _ref.height,
      x = _ref.x,
      y = _ref.y,
      fill = _ref.fill;

  _classCallCheck(this, Rectangle);

  this.render = function (context) {
    context.beginPath();
    context.fillStyle = _this.fill;
    context.fillRect(_this.x, _this.y, _this.width, _this.height);
  };

  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  this.fill = fill || "#000";
};

exports.default = Rectangle;