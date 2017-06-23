"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas(domNode) {
    var _this = this;

    _classCallCheck(this, Canvas);

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
  }

  _createClass(Canvas, [{
    key: "resize",
    value: function resize() {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    }
  }, {
    key: "add",
    value: function add(object) {
      this.objects.push(object);
    }
  }, {
    key: "remove",
    value: function remove(object) {
      this.objects = this.objects.filter(function (o) {
        return o !== object;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.objects.forEach(function (object) {
        object.render(_this2.context);
      });
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;