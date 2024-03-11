'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function shallowCloneTest() {
  // Shallow clone with objects
  const objectsOriginal = [{name: 'Sadie', age: 12}, {name: 'Patrick', age: 18}];
  const objectsCopy = [...objectsOriginal];

  console.log(`Before change to objectsCopy: ${objectsOriginal[0].age}`);

  // Change one of the people objects in objectsCopy
  objectsCopy[0].age = 14;

  // Investigate the same object in objectsOriginal
  console.log(`After change to objectsCopy: ${objectsOriginal[0].age}`);   // 14  
}

function deepCloneTest() {
  // Deep clone with objects
  const objectsOriginal = [{name: 'Sadie', age: 12}, {name: 'Patrick', age: 18}];

  // Create a new array with copied objects
  const objectsCopy = objectsOriginal.map( element => ({...element}) );

  console.log(`Before change to objectsCopy: ${objectsOriginal[0].age}`);
  
  // Change one of the people objects in objectsCopy
  objectsCopy[0].age = 14;

  // Investigate the same object in objectsOriginal
  console.log(`After change to objectsCopy: ${objectsOriginal[0].age}`);   // 12
}

// Basic shallow clone using ...operator
const numbers = [2, 42, 5, 304, 1, 13];
const numbersCopy = [...numbers];
console.log(numbersCopy);

// Compare approaches with objects
shallowCloneTest();
deepCloneTest();


/* Exercise
1. clone the deck of cards using shallow copy with ...operator
2. clone the deck of cards using deep copy with array.map and ...operator
*/