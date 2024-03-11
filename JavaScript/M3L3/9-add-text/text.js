'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


//Note that global this is now not undefined, but represent current browser windo
console.log(this);

// use getElementById to access the div element
const div = document.getElementById('target');

// get paragraph text
const txt = this.prompt('Enter new paragraph text', '');

// use getElementsByTagName and the collection index
// to access the first paragraph
const oldPara = div.getElementsByTagName('p')[0];

// create a text node, this is the text that is in a tag, i.e. <p>text</p>
const txtNode = document.createTextNode(txt);

// create a new paragraph
const para = document.createElement('p');

// append the text to the paragraph, and insert the new para
para.appendChild(txtNode);
div.insertBefore(para, oldPara);
