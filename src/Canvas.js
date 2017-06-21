class Canvas {
  constructor({ domNode, width, height }) {
    this.canvas = domNode;
    this.context = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.objects = [];
  }

  setSize = ({ width, height }) => {
    this.canvas.width = width;
    this.canvas.height = height;
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
