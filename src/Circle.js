import Shape from "./Shape";

class Circle extends Shape {
  constructor(props) {
    super(props);

    const { x, y, radius } = props;

    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 0;
  }

  isHit({ x, y }) {
    const dx = x - this.x;
    const dy = y - this.y;

    return Math.sqrt(dx * dx + dy * dy) <= this.radius;
  }

  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

    super.renderStrokeAndFill(context);
  }
}

export default Circle;
