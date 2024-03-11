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

function rndDecimal (_from, _to, _nrDecimals = 3) {
  return rnd(_from * 10**_nrDecimals, _to * 10**_nrDecimals) / 10**_nrDecimals};

console.log(rndDecimal(1000, 2000));
console.log(rndDecimal(0, 10, 5));

/* Exercises
const fNames = 'John, Mary, Hans, Thomas, José, Susanne'.split(', ');
const ltNames = 'Smith, Schultz, Perez, Johnsson'.split(', ');

1. write to the console 20 random full names from above list. Take the steps, exract the list of names, trim it, pick a name randomly, create a full name

*/
