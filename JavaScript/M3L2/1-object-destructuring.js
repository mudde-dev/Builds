'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

//destructuring into separate variables
const animal = {
    Name: 'Red Fox', Group: 'Mammalia', Order: 'Carnivora'
};

//variable names has to same as property names, but order irrelevant
const { Order, Name } = animal;
console.log(Name, Order);

const animal2 = {Order, Name};
console.log(animal2);


//destructuring into separately declared variables, but needs abit syntax sugar
const address = {
    country: 'Australia', city: 'Sydney', streetNum: '412',
    streetName: 'Worcestire Blvd'
};

//variable names has to same as property names, but order irrelevant
let country, city;

//Here the syntax sugar: Note the () needed in the assignment
({ city, country } = address);
console.log(country, city);



