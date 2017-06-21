"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function Canvas(_ref) {
  var domNode = _ref.domNode,
      width = _ref.width,
      height = _ref.height;

  _classCallCheck(this, Canvas);

  _initialiseProps.call(this);

  this.canvas = domNode;
  this.context = this.canvas.getContext("2d");
  this.canvas.width = width;
  this.canvas.height = height;
  this.objects = [];
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setSize = function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;

    _this.canvas.width = width;
    _this.canvas.height = height;
  };

  this.add = function (object) {
    _this.objects.push(object);
  };

  this.remove = function (object) {
    _this.objects = _this.objects.filter(function (o) {
      return o !== object;
    });
  };

  this.render = function () {
    _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    _this.objects.forEach(function (object) {
      object.render(_this.context);
    });
  };
};

exports.default = Canvas;