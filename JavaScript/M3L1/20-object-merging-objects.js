'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

// Merging two objects
const address = {
  country: 'Australia', city: 'Sydney', streetNum: '412',
  streetName: 'Worcestire Blvd'
};

const customer = {
  firstName: 'Lisa', lastName: 'Stanecki'
};

console.log('address: ', address);
console.log('customer: ', customer);

//use the spread syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//Spread syntax (...) allows an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

const o1 = {...customer};  // a new object with all key/values of customer copied in through expansion, a deep copy 
console.log('o1: ', o1);

const customerWithAddress = {...customer, ...address};
console.log(`customerWithAddress: `, customerWithAddress);  // The customerWithAddress now has all six properties
console.log(customerWithAddress);  


// Merging two objects that have the same property name, the property value is overwritten
const customerWithCountry = {
  firstName: 'Lisa', lastName: 'Stanecki', country: 'South Korea'
};

const customerConflict1 = {...customerWithCountry, ...address};
console.log(customerConflict1.country);  // Shows 'Australia'

const customerConflict2 = {...address, ...customerWithCountry};
console.log(customerConflict2.country);  // Shows 'South Korea'