'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function NamedParam1({param1, param2, param3})
{
  console.log(param1, param2, param3);
}

NamedParam1({param3:"hello"});


function NamedParam2({param1, param2, param3} = {param1:"Sam", param2: "Frod", param3: "Harry"})
{
  console.log(param1, param2, param3);
}

NamedParam2();
NamedParam2({param3: "Baggins"});


//{discardTime, discardYears, precision} must be named exactly the same in the caller argument object
//notice default value on precision, but not on the other

function dateDifferenceInSeconds(newerDate, olderDate, {discardTime, discardYears, precision} = {precision:2}) {
  
  // Note: typechecking omitted for brevity


  if (discardTime) {
    newerDate = newerDate.setHours(0,0,0,0);
    olderDate = newerDate.setHours(0,0,0,0);
  }
  if (discardYears) {
    newerDate.setYear(0);
    olderDate.setYear(0);
  }
    
  const differenceInSeconds = (newerDate.getTime() - olderDate.getTime())/1000;  
  return differenceInSeconds.toFixed(precision);
}

// Compare the current date to an older date
const newDate = new Date();
const oldDate = new Date(2010, 1, 10);

// Call the function without an object literal
let difference = dateDifferenceInSeconds(newDate, oldDate);
console.log(difference);

// Call the function with an object literal, and specify two properties
difference = dateDifferenceInSeconds(newDate, oldDate, {discardYears:true, precision:3});
console.log(difference);


