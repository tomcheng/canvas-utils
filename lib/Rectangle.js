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

var Rectangle = function (_Shape) {
  _inherits(Rectangle, _Shape);

  function Rectangle(_ref) {
    var width = _ref.width,
        height = _ref.height,
        x = _ref.x,
        y = _ref.y,
        fill = _ref.fill;

    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _initialiseProps.call(_this);

    _this.x = x || 0;
    _this.y = y || 0;
    _this.width = width || 0;
    _this.height = height || 0;
    _this.fill = fill || "#000";
    return _this;
  }

  return Rectangle;
}(_Shape3.default);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.isHit = function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;

    return x >= _this2.x && x <= _this2.x + _this2.width && y >= _this2.y && y <= _this2.y + _this2.height;
  };

  this.render = function (context) {
    context.beginPath();
    context.fillStyle = _this2.fill;
    context.fillRect(_this2.x, _this2.y, _this2.width, _this2.height);
  };
};

exports.default = Rectangle;