'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//#region creating a simple object
console.group('creating a simple object');
const person = {
    firstName: 'Lisa',
    lastName: 'Stanecki',
    birthDate: new Date(1996, 5, 12),
    address: {
        street: 'Worcestire Blvd 412',
        country: 'Australia', 
        city: 'Sydney'
    },

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
    },

    //override toString()
    toString: function () { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` }
}

console.log(' ' + person);
console.groupEnd();
//#endregion

//#region Using seedGenerator to create random initialized object
console.group('Using seedGenerator to create random initialized object');
function createPerson (_sgen)
{
    const person = 
    {
        address:{},

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
        },
        
        //override toString()
        toString: function () { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` }  
    };
    person.firstName = _sgen.firstName;
    person.lastName = _sgen.lastName;
    person.birthDate = _sgen.dateAndTime(1970, 2000);

    person.address.country = _sgen.country;
    person.address.city = _sgen.city(person.address.country);
    person.address.street = _sgen.street(person.address.country);

    return person;
}

const _seeder = new seedGenerator();
const p = createPerson(_seeder);
console.log(' ' + p);
console.groupEnd();
//#endregion

//#region using function to create a class Person with possibility to random initialize
console.group('using function to create a class Person with possibility to random initialize');

//Step 1: create a constructor function with initiation, not I use parameter destructuring to set named parameters
//        set the class properties using this.property notation
//        NOTE = I place the _seeder last with a default of null
function Person ( _sgen, { firstName, lastName, birthDate } = { firstName: '', lastName: '', birthDate: undefined },
    { street, city, country } = { street: '', city: '', country: '' }) {

    if (!_sgen) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;

        this.address = {};
        this.address.street = street;
        this.address.city = city;
        this.address.country = country;
    }
    else {
        this.firstName = _sgen.firstName;
        this.lastName = _sgen.lastName;
        this.birthDate = _sgen.dateAndTime(1970, 2000);
    
        this.address = {};
        this.address.country = _sgen.country;
        this.address.city = _sgen.city(this.address.country);
        this.address.street = _sgen.street(this.address.country);
    }
}

//Step 2: set the methods, getters and setters as properties in a prototype object  
Person.prototype = {
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
    },
    toString: function () { return `${this.firstName} ${this.lastName} from ${this.address.city}, ${this.address.country} is ${this.age} years old.` },
}

//Now I can use the function as a class where every object inherits the properties and methods
const p1 = new Person(null);
console.log('' + p1);


const p2 = new Person(null, { firstName: "John", lastName: "Smith", birthDate: new Date(1990, 4, 23) }, { street: "Fullerton Ave 3", city: "Chicago", country: "USA" });
console.log('' + p2);


const p3 = new Person(_seeder);
console.log('' + p3);

//Checking the instance class (function) of an object
console.log(p1 instanceof Person);
console.log(p2 instanceof Person);
console.log(p3 instanceof Person);

console.groupEnd();
//#endregion

//#region Generating several randomly initialized objects from function class
console.group('Generating several randomly initialized objects from function class');

//Simply wrap the constructor with a create fuction
function createPersonUsingConstructor (_sgen)
{
    return new Person(_sgen);
}

//pass the create function to the seedGenerator
const persons = _seeder.toArray(10000, createPersonUsingConstructor)

console.log(persons.length);
console.log("" + persons[0]);
console.log("" + persons[persons.length-1]);

console.groupEnd();
//#endregion
