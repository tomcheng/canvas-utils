class Shape {
  constructor() {
    this.callbacks = {};
  }

  addEventListener = (event, callback) => {
    if (this.callbacks[event]) {
      this.callbacks[event].push(callback);
    } else {
      this.callbacks[event] = [callback];
    }
  };
}

export default Shape;
