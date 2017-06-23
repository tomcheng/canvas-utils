"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(_ref) {
  var width = _ref.width,
      height = _ref.height,
      x = _ref.x,
      y = _ref.y,
      fill = _ref.fill,
      onClick = _ref.onClick;

  _classCallCheck(this, Rectangle);

  _initialiseProps.call(this);

  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  this.fill = fill || "#000";
  this.onClick = onClick;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.isHit = function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;

    return x >= _this.x && x <= _this.x + _this.width && y >= _this.y && y <= _this.y + _this.height;
  };

  this.render = function (context) {
    context.beginPath();
    context.fillStyle = _this.fill;
    context.fillRect(_this.x, _this.y, _this.width, _this.height);
  };
};

exports.default = Rectangle;