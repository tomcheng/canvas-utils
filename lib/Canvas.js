"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function Canvas(domNode) {
  var _this = this;

  _classCallCheck(this, Canvas);

  this.resize = function () {
    _this.canvas.width = _this.canvas.offsetWidth;
    _this.canvas.height = _this.canvas.offsetHeight;
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

  this.canvas = domNode;
  this.context = this.canvas.getContext("2d");
  this.canvas.width = domNode.offsetWidth;
  this.canvas.height = domNode.offsetHeight;
  this.objects = [];
  this.canvas.addEventListener("click", function (evt) {
    var _evt$target$getBoundi = evt.target.getBoundingClientRect(),
        elTop = _evt$target$getBoundi.top,
        elLeft = _evt$target$getBoundi.left;

    var pageX = evt.pageX,
        pageY = evt.pageY;

    var x = pageX - elLeft;
    var y = pageY - elTop;

    _this.objects.forEach(function (object) {
      if (object.onClick && object.isHit && object.isHit({ x: x, y: y })) {
        object.onClick({ x: x, y: y });
      }
    });
  });
};

exports.default = Canvas;