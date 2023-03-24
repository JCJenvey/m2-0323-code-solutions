/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * (radius * radius);
    const circumference = 2 * Math.PI * radius;
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    return super.print() + ' The radius is ' + this.radius + '.';
  }
}

const newCircle = new Circle(5);

console.log(newCircle.print());
