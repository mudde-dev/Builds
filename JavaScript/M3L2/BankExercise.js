'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('Nu skapar vi kontot');
function Account({ accountNr, accountTotal, firstName, lastName, city } =
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

const a = new Account();
console.log(''+a);

const _seeder = new seedGenerator();
const b = new Account().createRandom(_seeder);
console.log(''+b);

const accounts = new Account().createRandomMany(_seeder,10);
accounts.forEach(acc => console.log(''+acc));
console.groupEnd();

console.group('ny skapar vi banken');
class Bank {

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

const baccounts = new Account().createRandomMany(_seeder, 1000);

//total of all accounts with less than 1000kr in it
const tot1 = baccounts.reduce((tot, account)=> account.accountTotal < 1000 ?tot+account.accountTotal :tot, 0);
console.log(tot1);

//total of all accounts with more or equal to 1000kr in it
const tot2 = baccounts.reduce((tot, account)=> account.accountTotal >= 1000 ?tot+account.accountTotal :tot, 0);
console.log(tot2);

//verification - should match bank total
console.log(tot1 + tot2);

const bank1 = new Bank("Martins bank1", baccounts );
console.log(bank1);
console.log(''+bank1);

console.log(bank1.Total());

console.groupEnd()

/* Exercises
1. use Array.map() to create an array of all the cities of the account holders.
2. use Set() collection to make the list of cities without duplicate cities
3. use for...of and Array.reduce() to printout the totals of all accounts in each city
*/
