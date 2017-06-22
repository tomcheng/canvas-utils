"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(_ref) {
  var _this = this;

  var x = _ref.x,
      y = _ref.y,
      radius = _ref.radius,
      fill = _ref.fill,
      opacity = _ref.opacity;

  _classCallCheck(this, Circle);

  this.render = function (context) {
    context.beginPath();
    context.globalAlpha = _this.opacity;
    context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
    context.fillStyle = _this.fill;
    context.fill();
    context.globalAlpha = 1;
  };

  this.x = x || 0;
  this.y = y || 0;
  this.radius = radius || 0;
  this.fill = fill || "#000";
  this.opacity = opacity !== undefined ? opacity : 1;
};

exports.default = Circle;