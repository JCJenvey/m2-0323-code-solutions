/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(area, circumference, width) {
    super(area, circumference);
    this.width = width;
  }

  print() {
    return super.print() + ' The width is ' + this.width + '.';
  }
}

const newSquare = new Square(30, 40, 6);

console.log(newSquare.print());
