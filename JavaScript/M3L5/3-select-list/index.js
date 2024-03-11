//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection


//Start the server by opening a terminal in /case-study-server and type node simple-with-selection-lists.js
const url = 'http://localhost:3000/select';

const niceThings1 = document.getElementById('nice-thing1');
const select1 = document.getElementById('nicestuff1');

const niceThings2 = document.getElementById('nice-thing2');
const select2 = document.getElementById('nicestuff2');

// perform GET request when select value changes
niceThings1.addEventListener('change', async () => {

  // GET request to server
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(niceThings1.value)
  });

  // if fetch is successful
  if (response.ok) {
    const result = await response.json();

    // empty the select element
    // add a default display option with text and no value
    initializeSelectElement(select1);

    // populate the select with the returned values
    populateSelectElement(select1, result);
  }
  else {
    // if there's a problem fetching the data, display an error
    alert('Error');
  }
});


//Fill it with local data
niceThings2.addEventListener('change', async () => {

  // empty the select element
  // add a default display option with text and no value
  initializeSelectElement(select2);

  //Check selection in niceTings2 and populate selection2
  for (const option of localOptions) {

    if (niceThings2.value === option.content) {

      // populate the select with the returned values
      populateSelectElement(select2, option.items);
      return;
    }
  }
});

const localOptions = [
  {
    "content": "critters",
    "items": ['puppies', 'kittens', 'guinea pigs']
  },
  {
    "content": "sweets",
    "items": ['licorice', 'cake', 'cookies', 'custard']
  },
  {
    "content": "birds",
    "items": ['robin', 'mockingbird', 'finch', 'dove']
  },
  {
    "content": "flowers",
    "items": ['roses', 'lilys', 'daffodils', 'pansies']
  }
];

function initializeSelectElement(selector) {
  selector.length = 0;
  selector.options[0] = new Option('--Please choose an option--', '');
}

function populateSelectElement(selector, options) {
  for (let i = 0; i < options.length; i += 1) {
    selector.options[selector.length] = new Option(options[i], options[i]);
  }
}

