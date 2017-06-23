"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
  function Shape(_ref) {
    var fill = _ref.fill,
        stroke = _ref.stroke,
        strokeWidth = _ref.strokeWidth,
        opacity = _ref.opacity,
        onClick = _ref.onClick;

    _classCallCheck(this, Shape);

    this.fill = fill || "transparent";
    this.stroke = stroke || "transparent";
    this.strokeWidth = strokeWidth || 0;
    this.opacity = opacity !== undefined ? opacity : 1;
    this.onClick = onClick;
  }

  _createClass(Shape, [{
    key: "renderStrokeAndFill",
    value: function renderStrokeAndFill(context) {
      context.globalAlpha = this.opacity;
      context.fillStyle = this.fill;
      context.fill();
      context.lineWidth = this.strokeWidth;
      context.strokeStyle = this.stroke;
      context.stroke();
      context.globalAlpha = 1;
    }
  }]);

  return Shape;
}();

exports.default = Shape;