'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

//Below I declare two parameters as needed and then the rest, numbers, is expanded into an array
function sumRounds(mustHave1, mustHave2, ...numbers) {
  let sum = mustHave1+mustHave2;

  //You should check that the parameters are of the type you expect
  if (typeof (mustHave1) !== 'number')
    throw new TypeError("alla parameters must be of type number");
  if (typeof (mustHave2) !== 'number')
    throw new TypeError("alla parameters must be of type number");
  if (numbers.length>0 && typeof (numbers[0]) !== 'number')
    throw new TypeError("alla parameters must be of type number");


  for(let i = 0; i < numbers.length; i+=1)  {
    sum += Math.round(numbers[i]);
  }
  return sum;
}

console.log(sumRounds(5, 16, 18.1));          // 39
console.log(sumRounds(2.3, 4, 5, 16, 18.1));  // 45

const a = [1,2,3,4,5,6,7,8,9,];
console.log(sumRounds(0,0, ...a));


//Get quotes from seedGenerator
const _seeder = new seedGenerator();
const _quotes = _seeder.allQuotes;

console.log(_quotes);


/* Exercises
1. Write a function that takes any number of quotes as parameters (but at least one) using the ...operator.
   - the function should return the quotes that contains the word "love"
  */
