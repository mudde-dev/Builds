'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const element = document.getElementById('example-element');
const toggle = document.getElementById('toggle');
const add = document.getElementById('add');
const remove = document.getElementById('remove');

const toggleStyle = () => {
  element.classList.toggle('toggle-me');
};

//See in browser debugger how the class="..." changes
const addStyle = () => {
  element.classList.add('new-class');
};

const removeStyle = () => {
  if (element.classList.contains('new-class')) {
    element.classList.remove('new-class');
  }
};

toggle.addEventListener('click', toggleStyle);
add.addEventListener('click', addStyle);
remove.addEventListener('click', removeStyle);
