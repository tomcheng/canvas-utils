"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Shape2 = require("./Shape");

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = function (_Shape) {
  _inherits(Rectangle, _Shape);

  function Rectangle(props) {
    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, props));

    var width = props.width,
        height = props.height,
        x = props.x,
        y = props.y;


    _this.x = x || 0;
    _this.y = y || 0;
    _this.width = width || 0;
    _this.height = height || 0;
    return _this;
  }

  _createClass(Rectangle, [{
    key: "isHit",
    value: function isHit(_ref) {
      var x = _ref.x,
          y = _ref.y;

      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
  }, {
    key: "render",
    value: function render(context) {
      context.beginPath();
      context.rect(this.x, this.y, this.width, this.height);

      _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), "renderStrokeAndFill", this).call(this, context);
    }
  }]);

  return Rectangle;
}(_Shape3.default);

exports.default = Rectangle;