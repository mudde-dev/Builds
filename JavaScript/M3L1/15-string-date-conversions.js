'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


//use Date.parse() to check valid date format
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

// Date *from* string (in ISO 8601 standard)
const NOT_ISOdateConverted = Date.parse('2021-12-15T03:24:00');
console.log(`NOT ISO converted: ${NOT_ISOdateConverted}`);

let ISOdateConverted = new Date(Date.parse('2021-12-15'));
console.log(`ISO converted: ${ISOdateConverted}`);

//DANGER! See how the date is converted into March 01
ISOdateConverted = new Date(Date.parse('2021-02-29'));
console.log(`ISO converted: ${ISOdateConverted}`);


//Check for invalid dates caused by date overflow. I.e. Feb 29 -> March 1 in JavaScript.
function createValidDate(year, month, _date) {
  var d = new Date(year, month, _date);
  if (d.getFullYear() != year 
    || d.getMonth() != month
    || d.getDate() != _date) {

    throw "invalid date";
  }
  return d;
}

//Parse a string to Date using ISO format
function stringToDate(dateString)
{
  const dateParts = dateString.split('-');

  // Find the individual date ingredients
  const year = dateParts[0];
  //convert the month to 0-based JavaScript representation
  const month = Number(dateParts[1])-1;
  const day = dateParts[2];

  let _date = createValidDate(year, month, day);
  return _date
}


try {
  const d = stringToDate('2021-02-29');
  console.log(Number.IsNaN(d));
}
catch
{
  console.log(`Invalid date`)
}


// Date to localized string 
let date = new Date(2021, 2, 31);
const usDate = new Intl.DateTimeFormat('en-US').format(date);
const ukDate = new Intl.DateTimeFormat('en-GB').format(date);
const jpDate = new Intl.DateTimeFormat('ja-JP').format(date);
console.log(`US: ${usDate}`);
console.log(`UK: ${ukDate}`);
console.log(`Japanese: ${jpDate}`);

// Customized German date format
const formatter = new Intl.DateTimeFormat('de-DE', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

console.log(`Custom German: ${formatter.format(date)}`);




/* Exercises

1. Write a code that checks your birthdate for validity
2. If your birthday is valid write it to the console in Swedish locale, sve-SE
  //https://metacpan.org/pod/DateTime::Locale::Catalog
3. Test with an invalid date such as June 31

*/
