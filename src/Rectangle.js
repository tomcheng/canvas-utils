class Rectangle {
  constructor({ width, height, x, y, fill, onClick }) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.fill = fill || "#000";
    this.onClick = onClick;
  }

  isHit = ({ x, y }) => {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  };

  render = context => {
    context.beginPath();
    context.fillStyle = this.fill;
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}

export default Rectangle;
