'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

const newObj = {};

// Set a unique property that will never clash with anything else
// A descriptive Symbol name is not necessary (it's primarily useful for
// identification while debugging), but ESLint rules require it

let uniqueId1 = Symbol();
let uniqueId2 = Symbol();

newObj[uniqueId1] = 'No two alike';
newObj[uniqueId2] = 'This will not clash, either';
console.log(newObj);


//When using Symbol() you cannot use .notation to get the property value. 
console.log(newObj.uniqueId1);
console.log(newObj.uniqueId2);

//only the [] notaion
console.log(newObj[uniqueId1]);
console.log(newObj[uniqueId2]);

//When usin symbols you need to iterate over the symbols
const symProps = Object.getOwnPropertySymbols(newObj);
console.log(`\nusing a for..of loop on properties of ${newObj} and it's prototypes`)
for (const sym of symProps) {
  console.log(`propertyValue: ${newObj[sym]}`);            //Note that you will not get a symbol name
}
