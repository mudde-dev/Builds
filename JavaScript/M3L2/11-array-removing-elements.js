'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function nonDestructiveRemove() {
  const animals = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
  console.log(animals);

  // Find where the 'walrus' item is
  const walrusIndex = animals.indexOf('walrus');
  
  // Join the portion before 'walrus' to the portion after 'walrus'
  const animalsSliced = [...animals.slice(0, walrusIndex), ...animals.slice(walrusIndex+1)];
  
  // now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']
  console.log(animalsSliced);
}

function inPlaceRemove() {
   const animals = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];

   // Find where the 'walrus' item is
   const walrusIndex = animals.indexOf('walrus');
   
   // Starting at walrusIndex, remove 1 element
   animals.splice(walrusIndex, 1);
   
   console.log(animals);
   // now animals = ['dog', 'cat', 'seal', 'lion', 'cat']
}

console.group('non Destructive remove')
nonDestructiveRemove();
console.groupEnd();

console.group('Destructive remove');
inPlaceRemove();
console.groupEnd();

console.group('to remove all elements, simply set length to 0');
const animals = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
console.log(animals)

animals.length = 0;
console.log(animals);
console.groupEnd();