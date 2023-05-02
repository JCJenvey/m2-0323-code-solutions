import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

let result;

switch (process.argv[3]) {
  case 'plus':
    result = add(process.argv[2], process.argv[4]);
    console.log('result: ' + result);
    break;

  case 'minus':
    result = subtract(process.argv[2], process.argv[4]);
    console.log('result: ' + result);
    break;

  case 'times':
    result = multiply(process.argv[2], process.argv[4]);
    console.log('result: ' + result);
    break;

  case 'over':
    result = divide(process.argv[2], process.argv[4]);
    console.log('result: ' + result);
    break;

  default:
    console.log('invalid operation');
}
