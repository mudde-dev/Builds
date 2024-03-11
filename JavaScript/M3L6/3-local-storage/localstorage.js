//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//The localStorage read-only property of the window interface allows you to access a Storage object for 
//the Document's origin. The stored data is saved across browser sessions.

// store the form input elements as a variable
const elems = document.querySelectorAll('input');

// store field values
function processField() {
  localStorage.setItem(this.id, this.value);
  
  //It is simple to read
  //const value = localStorage.getItem(this.id);
}

// clear individual fields
function clearStored() {
  elems.forEach(elem => {
    if (elem.type === 'text') {
      localStorage.removeItem(elem.id);
    }
  });
}

// capture submit button to clear storage when clicked
document.getElementById('inputform').addEventListener('submit', clearStored);

// on form element change, store the value in localStorage
elems.forEach(elem => {

  //inititate the input field
  if (elem.type === 'text') {
    const value = localStorage.getItem(elem.id);
    if (value) elem.value = value;

    // add a change event listener
    elem.addEventListener('change', processField);
  }
});


localStorage.setItem('eternal until removed', 'eternal');
