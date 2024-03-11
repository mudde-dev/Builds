'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


console.group('Restrincting propterties using Object.defineProperty()')
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// Create a read-only property, it is the default
const data = {};
Object.defineProperty(data, 'type', {
  value: 'primary',
  enumerable: true
});

// Attempt to change the read-only property
console.log(data.type);           // primary
//data.type = 'secondary';          // TypeError in strict mode: not allowed to change 
//console.log(data.type);           // No Error in non-strict mode, but unchanged


// Create a writeable property
Object.defineProperty(data, 'id', {
  value: 1,
  writable: true
});

// Change this modifiable property
console.log(data.id); // 1
data.id = 300;
console.log(data.id); // 300
console.groupEnd();


console.group('Restring properties through getters and setters');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

const person = {
  firstName: 'Joe',
  lastName: 'Khan',
  dateOfBirth: new Date(1996, 5, 12),

  get age() {
       // Calculate the difference in years
       const today = new Date();
       let age = today.getFullYear() - this.dateOfBirth.getFullYear();
       
       // Adjust if the bithday hasn't happened yet this year
       const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())) {      
         age -= 1;
       }
       return age;  
  },

  set dateOfBirthString (value) 
  {
    //this refers to this object in a get and set
    this.dateOfBirth = new Date(Date.parse(value));
  }
};

//person.age = 25;      //TypeError in strict mode as it is a get only
console.log(`Age of person born ${person.dateOfBirth.toDateString()} is ${person.age}`); 


person.dateOfBirthString = '1986.05.12'; //setting is fine
console.log(person.dateOfBirthString);   //undefined property as there is no getter

console.log(`Age of person born ${person.dateOfBirth.toDateString()} is ${person.age}`); 
console.groupEnd();

