class Canvas {
  constructor(domNode) {
    this.canvas = domNode;
    this.context = this.canvas.getContext("2d");
    this.canvas.width = domNode.offsetWidth;
    this.canvas.height = domNode.offsetHeight;
    this.objects = [];
    this.canvas.addEventListener("click", evt => {
      const { top: elTop, left: elLeft } = evt.target.getBoundingClientRect();
      const { pageX, pageY } = evt;
      const x = pageX - elLeft;
      const y = pageY - elTop;

      this.objects.forEach(object => {
        if (object.onClick && object.isHit && object.isHit({ x, y })) {
          object.onClick({ x, y });
        }
      });
    });
  }

  resize = () => {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  };

  add = object => {
    this.objects.push(object);
  };

  remove = object => {
    this.objects = this.objects.filter(o => o !== object);
  };

  render = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.objects.forEach(object => {
      object.render(this.context);
    });
  };

}

export default Canvas;
