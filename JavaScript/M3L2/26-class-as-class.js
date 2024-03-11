//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('using class to create a class Person and create several objects');

class Person {

    //class contructor
    constructor({ firstName, lastName, birthDate } = { firstName: '', lastName: '', birthDate: undefined },
        { street, city, country } = { street: '', city: '', country: '' }) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;

        this.address = {};
        this.address.street = street;
        this.address.city = city;
        this.address.country = country;
    }

    get age() {
        if (typeof this.birthDate === 'undefined') return undefined;        // Note this.birthDate, dont forget this. because a non declared variable is undefines
    
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();

        // Adjust if the bithday hasn't happened yet this year
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age -= 1;
        }
        return age;
    }
    toString() { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` }

    static #_createRandom(_sgen) {
        let p = new Person();

        p.firstName = _sgen.firstName;
        p.lastName = _sgen.lastName;
        p.birthDate = _sgen.dateAndTime(1970, 2000);
    
        p.address = {};
        p.address.country = _sgen.country;
        p.address.city = _sgen.city(p.address.country);
        p.address.street = _sgen.street(p.address.country);

        return p;
    }

    static createRandom(_sgen, nrOfItems = 1) {
        if (typeof (nrOfItems) !== 'number')
            throw new TypeError('nrOfItems nust me a number')

        let result = [];
        for (let i = 0; i < nrOfItems; i++) {
            result.push(Person.#_createRandom(_sgen));
        }

        if (result.length == 1)
            return result[0]; // return the object

        //otherwise, return the array
        return result;
    }
}

const p = new Person({firstName:'Martin', lastName:'Lenart'});
console.log(''+p)

const _seeder = new seedGenerator();
const aPerson = Person.createRandom(_seeder);
console.log('' + aPerson);

let persons = Person.createRandom(_seeder, 10);
console.log(persons);

persons = persons.sort((first, second) => {

    if (first.address.country.toLowerCase() !== second.address.country.toLowerCase())
        return first.address.country.localeCompare(second.address.country);

    return first.address.city.localeCompare(second.address.city);
});

console.log(...persons);


// looping through array with for..of
for (const p of persons) {
    console.log('' + p);
}

// looping through array with for..in
for (const index in persons) {
    console.log('' + persons[index]);
}

/* Exercises
1. Sort the array person according to countries and then cities and printout with ...operator
2. Loop through persons using for...of and printout
3. Loop through persons using for...in and printout
*/
