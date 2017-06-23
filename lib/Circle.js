"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Shape2 = require("./Shape");

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        radius = _ref.radius,
        fill = _ref.fill,
        opacity = _ref.opacity;

    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _initialiseProps.call(_this);

    _this.x = x || 0;
    _this.y = y || 0;
    _this.radius = radius || 0;
    _this.fill = fill || "#000";
    _this.opacity = opacity !== undefined ? opacity : 1;
    return _this;
  }

  return Circle;
}(_Shape3.default);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.isHit = function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;

    var dx = x - _this2.x;
    var dy = y - _this2.y;

    return Math.sqrt(dx * dx + dy * dy) <= _this2.radius;
  };

  this.render = function (context) {
    context.beginPath();
    context.globalAlpha = _this2.opacity;
    context.arc(_this2.x, _this2.y, _this2.radius, 0, 2 * Math.PI);
    context.fillStyle = _this2.fill;
    context.fill();
    context.globalAlpha = 1;
  };
};

exports.default = Circle;