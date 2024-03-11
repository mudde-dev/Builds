'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//to import ES6 modules you have to have a package.json file in you directory.
//in terminal type npm init -y
//in the created package.json add on first row
//"type": "module",

function createVehicle(_seeder) {
    const vehicle = {};
    vehicle.regNumber = `${_seeder.fromString("NMN, ABC, KLW, SVA, PLU, BCX, PKH, UTO")} ${randomNumber(100, 999)}`;
    vehicle.make = _seeder.fromString("Volvo, BMW, Audi");
    vehicle.model = _seeder.fromString("XC70, XC90, i300, A4");
    vehicle.age = randomNumber(1, 20);

    const fn = _seeder.firstName;
    const ln = _seeder.lastName;
    vehicle.owner = `${fn} ${ln}`;
    vehicle.owner_email = _seeder.email(fn, ln);

    return vehicle;
}

const _seeder = new seedGenerator();
const v1 = createVehicle(_seeder);
const v2 = createVehicle(_seeder);
const v3 = createVehicle(_seeder);
console.log(v1);
console.log(v2);
console.log(v3);

//assign toString function directly to an object
v1.toString = function () { return `The vehicle ${this.regNumber} is ${this.age} years old and owned by ${this.owner}` };
console.log(''+v1);


//or we can assign the function to a prototype which then becomes valid for all objects with the prototype
let proto = {
    toString: function () { return `The vehicle ${this.regNumber} is ${this.age} years old and owned by ${this.owner}` }
}

//now we can assign the prototype to the created objects
Object.setPrototypeOf(v2, proto);
Object.setPrototypeOf(v3, proto);

console.log(''+v2);
console.log(''+v3);

console.log(isEqual(v1, v2));
console.log(isEqual(v2, v3));

const v2Copy = deepCopy(v2);        //deepCopy will not copy functions prop, so works only toString is in prototype
console.log(isEqual(v2, v2Copy));



/* Exercises
1. Add a uniqueId property to vehicle and assign it a unique value from seido-helpers
2. Create an variabel, v4 and assign it a values using createVehicle(),
   Create another variable v5 and assign it to reference v4 using simple v4 = v5
   Change v5.Make to "Mercedes" and print out v5 and v4. Study the result
3. Create another variable v6 and make is a deepCopy of v5
   Change v6.Make to "Toyota" and print out v6 and v5. Study the result
*/