'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function addNumbers(firstNum = 10, secondNum = 20, thirdNum = 30, multiplier = 1) {

  /*
  //You should check that the parameters are of the type you expect
  if (typeof (firstNum) !== 'number' && typeof firstNum !== 'undefined')
    throw new TypeError("alla parameters must be of type number");
  if (typeof (secondNum) !== 'number' && typeof (secondNum) !== 'undefined')
    throw new TypeError("alla parameters must be of type number");
  if (typeof (thirdNum) !== 'number' && typeof (thirdNum) !== 'undefined')
    throw new TypeError("alla parameters must be of type number");
  if (typeof (multiplier) !== 'number' && typeof (multiplier) !== 'undefined')
    throw new TypeError("alla parameters must be of type number");
*/

  return multiplier * (firstNum + secondNum + thirdNum);
}

// With three default values
console.log(addNumbers(42));  // 92


// You must use undefined to use the default, unless the parameters are optional
// With an out-of-order default value
console.log(addNumbers(42, 10, undefined, 1));  // 82


// Now, not caught by the type checking
console.log(addNumbers(42, 10, null, 1));  // 52


/* Exercises
1. Remove the try-catch and simply run the code with the try block. What happens?
2. Remove the typechecking and run the code. What happens in the last call with the null argument
*/