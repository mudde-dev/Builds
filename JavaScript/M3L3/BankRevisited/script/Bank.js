'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

export function Account({ accountNr, accountTotal, firstName, lastName, city } =
    { accountNr: 'xxx-xxx-xxx', accountTotal: 0, firstName: 'unknown', lastName: 'unknown', city: 'unknown' }) {

    this.accountNr = accountNr;
    this.accountTotal = accountTotal;

    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
}

Account.prototype = {

    toString: function () { return `account: ${this.accountNr} has amount ${this.accountTotal}kr, owner: ${this.firstName} ${this.lastName} from ${this.city}`},

    createRandom: function (_sgen) {
        const a = new Account();
        a.accountNr = `${randomNumber(100,1000)}-${randomNumber(100,1000)}-${randomNumber(100,1000)}`;
        a.accountTotal = randomNumber(0,50000);

        a.firstName = _sgen.firstName;
        a.lastName = _sgen.lastName;
        a.city = _sgen.city();

        return a;
    },

    createRandomMany: function (_sgen, nrOfItems) {
        return _sgen.toArray(nrOfItems, this.createRandom);
    }
};

export class Bank {

    //class contructor
    constructor(name = 'unknown', accounts = []) {

        this.name = name;
        this.accounts = accounts;
    }

    toString() { return `Bank: ${this.name} has ${this.accounts.length} accounts with a total of ${this.Total()}kr`}

    Total() { 
        if (this.accounts.length === 0) return 0;

        const total = this.accounts.reduce( (tot, acc) => tot + acc.accountTotal, 0);
        return total}   
}
