"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(_ref) {
  var x = _ref.x,
      y = _ref.y,
      radius = _ref.radius,
      fill = _ref.fill,
      opacity = _ref.opacity,
      onClick = _ref.onClick;

  _classCallCheck(this, Circle);

  _initialiseProps.call(this);

  this.x = x || 0;
  this.y = y || 0;
  this.radius = radius || 0;
  this.fill = fill || "#000";
  this.opacity = opacity !== undefined ? opacity : 1;
  this.onClick = onClick;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.isHit = function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;

    var dx = x - _this.x;
    var dy = y - _this.y;

    return Math.sqrt(dx * dx + dy * dy) <= _this.radius;
  };

  this.render = function (context) {
    context.beginPath();
    context.globalAlpha = _this.opacity;
    context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
    context.fillStyle = _this.fill;
    context.fill();
    context.globalAlpha = 1;
  };
};

exports.default = Circle;