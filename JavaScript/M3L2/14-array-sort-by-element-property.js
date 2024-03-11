'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

const people = [
  { firstName: 'Joe', lastName: 'Khan', age: 21 },
  { firstName: 'Dorian', lastName: 'Khu', age: 15 },
  { firstName: 'Tammy', lastName: 'Smith', age: 15 },
  { firstName: 'Noor', lastName: 'Biles', age: 33 },
  { firstName: 'Sumatva', lastName: 'Chen', age: 19 }
  ];

console.log(people);
// Sort the people from youngest to oldest

const peopleAgeSorted = [...people];
peopleAgeSorted.sort( (a, b) => {
 // Subtract the ages to sort from youngest to oldest
 return a.age - b.age;
});

console.log(...peopleAgeSorted);
// Now the order is Dorian, Sumatva, Joe, Noor, Tammy

const peopleNameSorted = [...people];
peopleNameSorted.sort((a,b) => a.lastName.localeCompare(b.lastName));
console.log(...peopleNameSorted);
// Now the order is Noor, Sumatva, Joe, Dorian, Tammy

//Sort first by age and then by lastname
const peopleAgeNameSorted = [...people];
peopleAgeNameSorted.sort((a,b) => {
  if (a.age !== b.age)
    return a.age - b.age;

  return a.lastName.localeCompare(b.lastName);
});
console.log(...peopleAgeNameSorted);


//using the seed generator
function createPerson (_sgen)
{
    const person = 
    {
        address:{}
    };
    person.firstName = _sgen.firstName;
    person.lastName = _sgen.lastName;

    person.address.country = _sgen.country;
    person.address.city = _sgen.city(person.address.country);

    return person;
}

const _seeder = new seedGenerator();
let persons = _seeder.toArray(100, createPerson);
console.log(persons);

/* Exercise 
1. Sort persons by country and printout
2. Sort persons by country and the city and printour
*/
