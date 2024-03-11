'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// General formula is:
// randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

//randomNumber = Math.floor(Math.random() * (max - min) ) + min;
//non inclusive max, but inclusive min
function rnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(rnd(1000, 2000));
console.log(rnd(0, 10));


// Exercise
const fNames = 'John, Mary, Hans, Thomas, José, Susanne'.split(', ');
const lNames = 'Smith, Schultz, Perez, Johnsson'.split(', ');

for (let i = 0; i<20; i++)
{
    console.log (`${fNames[rnd(0, fNames.length)]} ${lNames[rnd(0, lNames.length)]}`)
}

/* Exercises
const fNames = 'John, Mary, Hans, Thomas, José, Susanne'.split(', ');
const ltNames = 'Smith, Schultz, Perez, Johnsson'.split(', ');

1. write to the console 20 random full names from above list. Take the steps, exract the list of names, trim it, pick a name randomly, create a full name

*/
