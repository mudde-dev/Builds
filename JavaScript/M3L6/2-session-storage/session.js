//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
//sessionStorage allows us to easily store information in the user’s browser for a single session. 
//A session lasts for as long as a single browser tab is open. 


sessionStorage.setItem('name', 'Adam');
sessionStorage.city = 'Pittsburgh';

const me = {name: 'Martin', email:'martin_lenart@icloud.com'}
sessionStorage.setItem('this is me', JSON.stringify(me));
// returns 2
console.log(sessionStorage.length);

// retrieve individual values
const name = sessionStorage.getItem('name');
const city = sessionStorage.getItem('city');

const miniMe = JSON.parse(sessionStorage.getItem('this is me'));


console.log(`The stored name is ${name}`);
console.log(`The stored city is ${city}`);

// remove an individual item from storage
sessionStorage.removeItem('name');

// remove all items from storage
sessionStorage.clear();

// returns 0
console.log(sessionStorage.length);
