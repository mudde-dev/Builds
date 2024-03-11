'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
//https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
//https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

console.group(`modify the property value via the element's style property`);
const description = document.getElementById('description');
console.log(description.style);
description.style.fontSize = '1.2em';
console.groupEnd();

console.group(`modify one or more CSS properties for a single element with setAttribute()`);
const card = document.getElementById('card');
card.setAttribute(
  'style',
  'background-color: #ecf0f1; color: #2c3e50; padding: 10px; font-family: sans-serif'
);

console.log(card.getAttribute('style'));
console.log(card.style);

//card.removeAttribute('style');
console.groupEnd();

console.group(`set the class property for the element`);
card.setAttribute('class', 'inline');

console.log(card.getAttribute('class'));
console.log(card.className);              //Note className not class
console.groupEnd();

console.group(`get the computed styles for an element`);
const style = window.getComputedStyle(card);
console.log(style);

