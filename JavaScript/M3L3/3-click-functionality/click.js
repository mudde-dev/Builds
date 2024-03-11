'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/Events
//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

//function that should be executed, could be an arrow function
function clickHandler (event)  {
  //prevent default, stops the link from acting as a <a href=...> acting as it should
  event.preventDefault();
  window.alert(`The ${event.currentTarget.nodeName} element has been clicked!`);
};

const btn = document.getElementById('click-button');
const href = document.getElementById('click-link');
const div = document.getElementById('click-div');
btn.addEventListener('click', clickHandler);
href.addEventListener('click', clickHandler);
div.addEventListener('click', clickHandler);

// add keyboard event listener to div for a11y
div.addEventListener('keydown', event => {
  if (event.code === 'Space' || event.code === 'Enter') {
    div.click();
  }
});

