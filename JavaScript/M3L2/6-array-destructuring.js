'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

// Using the destructuring syntax
const stateValues = [459, 144, 96, 34, 0, 14];
const [arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;
console.log(missouri); // 144


// Unfolding an array into a list of values with spread
const numbers = [2, 42, 5, 304, 1, 13];

//...operator destructurs the array into content items
console.log(numbers);
console.log(...numbers);


// So it is easy to find the largest number without iterating, because Math.max takes unlimited parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// so, whenever you see in js a function that takes an unlimited nr of parameters, use ...on an array
console.log(Math.max(1,3,100,1000, 0, 3));
console.log(Math.max(...numbers));

/* Exercise
1. use an object structure of { suit: "Heart", numeral: "King"} and create a deckof cards.
   - you need to create one array of the suit and one array of the values and then nested loops to create all cards
2. use the ... operator to destructure your deck of cards to print our the cards to the console
*/
