'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Glossary/IDL
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
//checked is an IDL (js only) attribute of a checkbox

const checkBox = document.getElementById('check');
const acceptButton = document.getElementById('accept');

const validate = () => {
  if (checkBox.checked) {
    acceptButton.disabled = false;
  } else {
    acceptButton.disabled = true;
  }
}

checkBox.addEventListener('click', validate);

//Using querySelector
document.getElementById('checkAll').addEventListener('click', (event) => {  
  var markedCheckbox = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked');  
  for (var checkbox of markedCheckbox) {  
    console.log(checkbox.id + ': ' + checkbox.value);  
  }  
});

const chkBxs = document.querySelectorAll('.checkboxes input[type="checkbox"]');
chkBxs.forEach((item) => {
  item.addEventListener('change', (event) => {
    console.log(`${event.target.id} changed`)})
  });

//Using querySelector
document.getElementById('radioAll').addEventListener('click', (event) => {  
  var markedCheckbox = document.querySelectorAll('.radiobuttons input[type="radio"]:checked');  
  for (var radioBtn of markedCheckbox) {  
    console.log(radioBtn.id + ': ' + radioBtn.value);  
  }  
});

const radioBtns = document.querySelectorAll('.radiobuttons input[type="radio"]');
radioBtns.forEach((item) => {
  item.addEventListener('change', (event) => {
    console.log(`${event.target.id} changed`)})
  });
