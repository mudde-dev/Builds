'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('TESTING FOR Object EQUALITY');
// non-strict equality operator: == != test for eqality after type conversions and returns a Boolean result. 
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

// strict equality operator: === and !== the strict equality operator always considers operands of different types to be different.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// almost ALWAYS use === and !== 

//Testing object equality - always assumed by reference
let name1 = {firstName: "Jane", lastName: "Doe"};
let name2 = {firstName: "Jane", lastName: "Doe"};

let name3 = name2;  // refer to the same object

// always assume reference equality
console.log('referential equality');
console.log (name1 == name2);    //false
console.log (name1 === name2);   //false

console.log (name2 == name3);    //true
console.log (name2 === name3);   //true

// you need to implement yourself value equality
console.log('value equality');
console.log (isEqual(name1, name2)); 
console.log (isEqual(name2, name3));


//Recursive helper to check object value equality by means of comparing properties
function isEqual(obj1, obj2) {
  var props1 = Object.keys(obj1);
  var props2 = Object.keys(obj2);

  if (props1.length != props2.length) {
      return false;
  }

  for (var i = 0; i < props1.length; i++) {
      let val1 = obj1[props1[i]];
      let val2 = obj2[props1[i]];
      let isObjects = isObject(val1) && isObject(val2);

      if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
          return false;
      }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}

//alternatives is to use js libraries such as, 
// https://lodash.com/docs/4.17.15#isEqual
// https://www.npmjs.com/package/fast-equals

