import Shape from "./Shape";

class Rectangle extends Shape {
  constructor(props) {
    super(props);

    const { width, height, x, y } = props;

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }

  isHit({ x, y }) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  }

  render(context) {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);

    super.renderStrokeAndFill(context);
  }
}

export default Rectangle;
