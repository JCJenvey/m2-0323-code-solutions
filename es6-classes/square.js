/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const circumference = width * 4;
    super(area, circumference);
    this.width = width;
  }

  print() {
    return super.print() + ' The width is ' + this.width + '.';
  }
}

const newSquare = new Square(6);

console.log(newSquare.print());
