class Rectangle {
  size = 0;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  //Setter
  set size(param) {
    this.size = param;
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
