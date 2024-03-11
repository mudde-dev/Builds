'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('Test if object is an array')
const browserNames = ['Firefox', 'Edge', 'Chrome', 'IE', 'Safari'];

if (Array.isArray(browserNames)) {
  // We end up here, because browserNames is a valid array.
  console.log('browserNames is an array');
}
else {
  console.log('browserNames is not an array');
}
console.groupEnd();

console.group('Iterating over an array')
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog', 'rabbit', 'eel', 'goose', 'earwig'];

//using for..of loop
for (const animal of animals) {
  console.log(animal)
}

//using for..in  - is gives idx of every item will be given
for (const idx in animals) {
  console.log(idx, animals[idx]);
}

//using a classic for loop
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//using foreach and arror function
animals.forEach((a)=> console.log(a));
console.groupEnd


/* Exercises

1. use the seido-helper seedGenerator and createVehicle function from M3L1 25-vehicleExercise to create an array
   of 10 vehicles. 
2. Loop through the array and present each Vehicle using a prototype toString

*/