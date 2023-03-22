/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

const studentPrototype = {
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() +
      ' and I am studying ' + this.subject + '.';
  }
};

Object.setPrototypeOf(Student.prototype, studentPrototype);
