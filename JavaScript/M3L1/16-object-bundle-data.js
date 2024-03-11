'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//to import ES6 modules you have to have a package.json file in you directory.
//in terminal type npm init -y
//in the created package.json add on first row
//"type": "module",
import {seedGenerator, uniqueId} from '../SeidoHelpers/seido-helpers.js';

// Object is a way to bundle data and functions 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


// Object literal with nested object
const employee = {
  employeeId: 402,
  firstName: 'Lisa',
  lastName: 'Stanecki',
  birthPlace: {country: 'Canada', city: 'Toronto'}
};

console.log (employee);                 // note how the nested object is printed
console.log(employee.birthPlace.city);  // 'Toronto'

employee.favoriteColor = 'blue';
console.log (employee); 
console.log (employee.favoritePetAge); 



// employee is a const, not the property this I can change
employee.firstName = 'Laban';
console.log (employee.firstName);

// You can add properties through array notation or . notation
employee.nickname = 'The Izz';
console.log(employee['nickname']);
employee['adress'] = {street: 'Fulterton drive 123', zipCode: '12345', city: 'Chicago'};
console.log(employee.nickname);
console.log(employee.adress.street);

// Add a computed property name using template literal.
// Note how the property value is dynamic
const i = 10;
employee[`sequence${i}`] = 'Another new property value';
console.log(employee.sequence10);

for (let index = 0; index < 5; index++) {
  employee[`myProp${index}`] = index;
}

console.log(employee);
console.log(employee.myProp0);
console.log(employee.myProp4);


//delete a property by using delete keyword
delete employee.employeeId;
delete employee.sequence10;
console.log(employee);


const propNames = "Seatle, Chicago, New_York".split(',').map(s => s.trim());
const propValue = "5000000, 8000000, 12000000".split(',').map(s => Number(s));

const magicObj = {};
for (let index = 0; index < propNames.length; index++) {
  magicObj[propNames[index]] = propValue[index];  
}

console.log(magicObj);


//Using seido-helpers seedGenerator()
const _seeder = new seedGenerator();
const _friend = {};

_friend.firstName = _seeder.firstName;
_friend.lastName = _seeder.lastName;
_friend.comment = _seeder.latinSentence;

console.log(_friend);

_friend.id = uniqueId();
console.log(_friend);


/* Exercise
1. Add a property id to the _friend object and use seido-helpers uniqueId() to give it a value.
2. Create a variable _address with an empty object
3. Create properties in _address from street, zipcode, city and country and assign them values both as literals 
   and from the seido-helpers seedGenerator.
  */

