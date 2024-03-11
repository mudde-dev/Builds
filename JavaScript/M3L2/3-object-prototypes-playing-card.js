'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//Lets use prototypes in a practical example. Let's create a few playing cards that should share some functions
console.group('Create some playing cards no OOP encapsulation')
//Lets create a couple playing card object
let card1 = { suit: "Heart", numeral: "King", value: 13, spriteRow: 2, spriteCol: 2 }; //sprite... is position in the cards.jpg
let card2 = { suit: "Heart", numeral: "Ace", value: 14, spriteRow: 0, spriteCol: 0 };
let card3 = { suit: "Heart", numeral: "Five", value: 5, spriteRow: 0, spriteCol: 4 };

//Now, I want to printout the card, and calculate background image position px in the sprite
function cardColor(card) {
    switch (card.suit) {
        case 'Heart':
        case 'Diamond': return 'red';
    }
    return 'black';
}
function cardFaceOrNumeral(card) {
    switch (card.numeral) {
        case 'Knight':
        case 'Queen':
        case 'King': return 'face';
    }
    return 'numeral';
}
function cardToString(card) { return `${card.suit} of ${card.numeral} is a ${cardColor(card)} ${cardFaceOrNumeral(card)} card` };

//Let's try it
console.log(cardToString(card1));
console.log(cardToString(card2));
console.log(cardToString(card3));
console.groupEnd();


console.group('Alternative I want to use OOP principles and encapulate the functions inta a prototype');
//First create the prtottyep object and assign the functions I want to share
let proto = {
    cardColor: function () {    //note, no parameter
        switch (this.suit) {    //note, I use this
            case 'Heart':
            case 'Diamond': return 'red';
        }
        return 'black';
    },
    cardFaceOrNumeral: function () {   
//    get cardFaceOrNumeral () {    //note, I can now change it to a getter
            switch (this.numeral) {
            case 'Knight':
            case 'Queen':
            case 'King': return 'face';
        }
        return 'numeral';
    },
    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral()} card` }

    //if I use a getter
//    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral} card` }
}

//now we can assign the prototype to the created objects
Object.setPrototypeOf(card1, proto);
Object.setPrototypeOf(card2, proto);
Object.setPrototypeOf(card3, proto);

console.log('' + card1);
console.log('' + card2);
console.log('' + card3);
console.groupEnd();


console.group('We can create new cards with the prototype, but the syntax will a bit different');
//Next, create the objects with above protottype
let card4 = Object.create(proto);
card4.suit = "Heart";
card4.numeral = "Queen";
card4.value = 12;
card4.spriteRow = 2;
card4.spriteCol = 1;
console.log('' + card4);
console.groupEnd();

console.group('I can ofcourse clone the object');
let card5 = Object.create(proto);
for (const key in card2) {
    if (card2.hasOwnProperty(key)) {
        card5[key] = card2[key];
    }
}
console.log('' + card5);
console.groupEnd();

console.group('Typesafer way is to create object using a propertiesObject');
//properties will be readonly by default - which is in this case good, unless you specify writable
let card6 = Object.create(proto,
    { suit: { value: "Heart" }, numeral: { value: "Knight" }, value: { value: 13 }, spriteRow: { value: 2, writable: true }, spriteCol: { value: 2 } });

//card5.numeral = "Five"; // TypeError as readonly
card6.spriteRow = 3;  // OK
console.log('' + card6);
console.groupEnd();

