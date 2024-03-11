'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


let stringTest = '42';
let numberTest = 42;
const blankTest = '';
const nullTest = null;
const wrappedTest = new String('42');


console.log('\nBasic string test');
if (typeof stringTest === 'string') {
  console.log('stringTest is a string');
}
if (typeof numberTest === 'string') {
  console.log('numberTest is a string');
}
if (typeof blankTest === 'string') {
  console.log('blankTest is a string');
}
if (typeof nullTest === 'string') {
  console.log('nullTest is a string');
}
if (typeof wrappedTest === 'string') {
  console.log('wrappedTest is a string');
}

console.log('\nSafe way to Test for content in a string');
if (typeof stringTest === 'string' && stringTest.length > 0) {
  console.log('stringTest is a string with text');
}
if (typeof blankTest === 'string' && blankTest.length > 0) {
  console.log('blankTest is a string with text');
}
if (typeof nullTest === 'string' && nullTest.length > 0) {
  console.log('nullTest');
}
if (typeof wrappedTest === 'string' && wrappedTest.length > 0) {
  console.log('wrappedTest');
}


console.log('\nDANGER zone because of truthy and falsy');
//Do not use sloppy js coding using truthy and falsy to test
stringTest = undefined;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = null;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = "a string";
console.log(!stringTest); // falsy - Correct, it is a string

//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

//But here such a test becomes wrong due to js truthy and falsy nature
stringTest = "";
console.log(!stringTest); // truthy - WRONG, because empty string is evaluated to false

stringTest = 5;
console.log(!stringTest); // falsy - WRONG is is not a string, but any number except 0, -0 is evaluated to true


console.log('\nTest for other types')
numberTest = Number.POSITIVE_INFINITY;
if (typeof numberTest === 'number' && !Number.isNaN(numberTest)) {
  console.log(`${numberTest} is a valid number`);
}


function myFunc(myParam
) {

  if (typeof myParam !== 'string') {
    console.log("\nwrong type - cannot run the algorithm");
    return;
  }

  if (myParam.length !== 0) {
    //Non empty string - do the algorithm
    console.log("\nNon empty string - do the algorithm");
  }
  else {
    //if the string is empty, set some default values and do the algorithm
    console.log("\nempty string, set some default values and do the algorithm");
  }
}

myFunc("Martin");
myFunc("");
myFunc(5);
myFunc(0);




let myVar = 5;
console.log(myVar);
console.log(typeof myVar);

if (typeof myVar === 'string' && myVar.length > 0)
  console.log("myVar is a non-empty string");

if (myVar)
  console.log("myVar is a non-empty string");


if (typeof myVar === 'number' && !Number.isNaN(myVar))
  console.log('myVar is a valid number');

/* Exercises

1. write code that: declare a variable myVar without assigning a value to it; 
   write to the console myVar and the typeof myVar, 
2. write code to check if myVar is an non-empty string, using safe way to test for content as above
3. write code to check if myVar is an non-empty string, using sloppy if (myVar)

4. run the code in 2 and 3 with myVar unassigned and with valid number. See how sloppy test fails, why?

5. write code to test i myVar is a valid number;
*/