const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

console.log('Even Numbers:');
const evenNumbers = numbers.filter(element => !(element % 2));
console.log(evenNumbers);

console.log('No D:');
const noD = names.filter(element => !(element.toUpperCase().includes('D')));
console.log(noD);
