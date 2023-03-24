/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return 'The area is ' + this.area + ' and the circumference is ' + this.circumference + '.';
  }
}

const newShape = new Shape(25, 40);

console.log(newShape.print());
