'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function roundNumber(value, numberOfDecimalPlaces) {
  const numberToRound = value * (10**numberOfDecimalPlaces);
  const roundedNumber = Math.round(numberToRound);
  return roundedNumber / (10**numberOfDecimalPlaces);
}

//use build-in toFixed()
let fractionalNumber = 19.48938;
const fixedPointNr = fractionalNumber.toFixed(2)  //Note, toFixed() returns a string
console.log(fixedPointNr);

// Test roundNumber()
fractionalNumber = 19.48938;
const roundedNumber = roundNumber(fractionalNumber, 2);
console.log(roundedNumber);    // 19.49


// Demonstrate floating point rounding errors for fixed decimal places (like currency values)
const currentBalance = 5382.23;
const transactionAmount = 14.02;

const updatedBalance = currentBalance - transactionAmount;
console.log(updatedBalance);  // 5368.209999999999

// Demonstrate safe operations for fixed decimal places
const currentBalanceInCents = 538223;
const transactionAmountInCents = 1402;

const updatedBalanceInCents = currentBalanceInCents - transactionAmountInCents;
console.log(updatedBalanceInCents);  // 536821