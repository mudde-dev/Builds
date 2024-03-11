'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


const decArray = [23, 255, 122, 5, 16, 99];
// Use the toString() method to conver to base-16 values
const hexArray = decArray.map( element => element.toString(16) );
console.log(`Changed ${decArray} to ${hexArray}`); // ['17', 'ff', '7a', '5', '10', '63']


/* Exercise 
1. use createPerson from 14-array-sort-by-element-property and create 100 persons
2. use array.map and create an array of full names (firstname + last name)
3. extract unique full names from the full names array
*/