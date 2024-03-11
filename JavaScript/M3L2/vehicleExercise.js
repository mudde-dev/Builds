'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

function Vehicle() {

    this.regNumber = undefined;
    this.make = undefined;
    this.model = undefined;
    this.age = undefined;

    this.owner = undefined;
    this.owner_email = undefined;
}

Vehicle.prototype = {

    toString: function () { return `The vehicle ${this.regNumber} is ${this.age} years old and owned by ${this.owner}` },

    createRandom: function (_sgen) {
        const v = new Vehicle();
        v.regNumber = `${_seeder.fromString("NMN, ABC, KLW, SVA, PLU, BCX, PKH, UTO")} ${randomNumber(100, 999)}`;
        v.make = _seeder.fromString("Volvo, BMW, Audi");
        v.model = _seeder.fromString("XC70, XC90, i300, A4");
        v.age = randomNumber(1, 20);
    
        const fn = _seeder.firstName;
        const ln = _seeder.lastName;
        v.owner = `${fn} ${ln}`;
        v.owner_email = _seeder.email(fn, ln);

        return v;
    },

    createRandomMany: function (_sgen, nrOfItems) {
        return _sgen.toArray(nrOfItems, this.createRandom);
    }
};

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

const v1 = new Vehicle();
console.log (v1);

const v2 = new Vehicle().createRandom(_seeder);
console.log (v2);

const vehicles = new Vehicle().createRandomMany(_seeder, 1000);
console.log(vehicles);


/* Exercises
1. Make a deepCopy of vehicles, dc_vehicles
2. Sort dc_vehicles according to age and printout
3. Extract the oldest dc_vehicles into a separate array

4. Use above structure and create a list of 1000 friends, each friend should have a firstname, lastname, an email address,
   a favorite quote and a favorite latin sentence 

*/