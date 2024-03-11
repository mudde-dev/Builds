
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

import { deckOfCards } from './deck-of-cards.js';


//https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty


//add a transition end event to first flexItem
const transition = document.querySelector('.flexItem');

transition.addEventListener('transitionend', () => {
 
  //check if element is hovered
  const hovered = document.querySelector('.flexItem:hover');
  if (hovered?.className === 'flexItem horizontalFlip')
  {
    //only deal a new card when hovering over the cards to ensure back is fully visible
    const newCard = deck.dealOne();
    console.log('Deal a new card: ' + newCard);

    const cardImg_1 = document.querySelector('.playingCard.front.cardOne');
    cardImg_1.style.setProperty('--topOffset', newCard.spriteTopOffset);
    cardImg_1.style.setProperty('--cardRow',  newCard.spriteRow);
    cardImg_1.style.setProperty('--cardCol', newCard.spriteCol);
  }
});

let deck = new deckOfCards();


//Test that I have the deck of cards
deck = new deckOfCards();
console.log(deck.count);
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count);

deck.shuffle();
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count);

deck.sort();
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(''+deck.dealOne());
console.log(deck.count);

console.log(...deck);

