'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd'
};

// Check for specific properties
if ('country' in address) {
  console.log('address.country exists');
}

if (!('zipCode' in address)) {
  console.log('address.zipCode does not exist');
}

// Check how many proerties there is
let properties = Object.keys(address);
console.log(`The address object has a length of ${properties.length}`);

const obj = {};
if (typeof obj === 'object' && Object.keys(obj).length === 0)
  console.log('this is an empty object');



// Iterate over all properties
//Object properties iteration usinf for..in loop
console.log(`\nusing a for..in loop on properties of ${address} and it's prototypes`)
for (const property in address) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}


console.log('\nIterating over all properties');
console.log(`using a typical array for..of loop on the key array of ${address}`);
//Array iteration over Object Keys using for..of
properties = Object.keys(address);
for (const property of properties) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

console.log(`\nusing a for loop on the key/value array of ${address}`);
//Array iteration over Object Keys
const entries = Object.entries(address);
for (let i = 0; i < entries.length; i+=1) {
  console.log(`${entries[i][0]} : ${entries[i][1]}`);
}


//Adding nameds properties dynamically
var data = {
  'PropertyA': 1,
  'PropertyB': 2,
  'PropertyC': 3
};

data["PropertyD"] = 4;

console.log(data.PropertyD);
console.log(data["PropertyD"]);


/* Exercises

1. create a variable with an empty object then using a for loop create 10 dynamically, prop1..prop10, with values 1..10.
2. print out the variable to teh console 
3. Iterate over the properties and print them out one-by-one using another for loop
 

*/
