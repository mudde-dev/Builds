'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.log(`Make an object readonly by using Object.freeze()`)
const customer = {
  firstName: 'Josephine',
  lastName: 'Stanecki'
};

console.log(customer);
console.log('Change customer name');
customer.firstName = 'Jo';
console.log(customer);

console.log('Freeze customer object');
Object.freeze(customer);

console.log('Attempt to change customer name');

// This throws an exception
customer.firstName = 'Jose';

// Below will also fail when frozen
//customer.middleInitial = 'P';
//delete customer.lastName;
console.log(customer);

