class Shape {
  constructor({ fill, stroke, strokeWidth, opacity, onClick }) {
    this.fill = fill || "transparent";
    this.stroke = stroke || "transparent";
    this.strokeWidth = strokeWidth || 0;
    this.opacity = opacity !== undefined ? opacity : 1;
    this.onClick = onClick;
  }

  renderStrokeAndFill(context) {
    context.globalAlpha = this.opacity;
    context.fillStyle = this.fill;
    context.fill();
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.stroke;
    context.stroke();
    context.globalAlpha = 1;
  }
}

export default Shape;
