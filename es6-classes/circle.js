/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(area, circumference, radius) {
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    return super.print() + ' The radius is ' + this.radius + '.';
  }
}

const newCircle = new Circle(14, 18, 2);

console.log(newCircle.print());
