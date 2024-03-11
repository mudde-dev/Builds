'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//CAUTION: Month is 0 based, so month 2 is March
const _date = new Date(2024, 2, 15);
console.log(`ISO converted: ${_date}`);

// Add days to date
const d = new Date();
const currentDay = d.getDate();

// Where will be three weeks in the future?
d.setDate(currentDay+21);
console.log(`Three weeks from today is ${d}`);

// How many days between two dates?
const oldDate = new Date(2021, 1, 1);
const newerDate = new Date(2021, 10, 1);

const differenceInMilliseconds = newerDate - oldDate;
const millisecondsPerDay = 1000*60*60*24;
let differenceInDays = differenceInMilliseconds / millisecondsPerDay;

// Only count whole days
differenceInDays = Math.trunc(differenceInDays);

// Shows 272 days
console.log(`Between ${oldDate} and ${newerDate} is ${differenceInDays}`);


//Using Date timestamp and a random nr to create a uniqueID
function _uniqueId () {
    const dateString = Date.now().toString(16);
    const randomness = Math.random().toString(16).substring(2);
    return dateString + randomness;
};

console.log(_uniqueId());