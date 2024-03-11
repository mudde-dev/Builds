'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

// table values
const values = new Array(3);
values[0] = [123.45, 'apple', true];
values[1] = [65, 'banana', false];
values[2] = [1034.99, 'cherry', false];

//Filling the table
const mixed = document.getElementById('mixed');
const tbody = document.createElement('tbody');

// for each outer array row
values.forEach(value => {
  const tr = document.createElement('tr');

  // for each inner array cell
  // create td then text, append
  value.forEach(cell => {
    const td = document.createElement('td');
    const txt = document.createTextNode(cell);
    td.appendChild(txt);
    tr.appendChild(td);
  });

  // attach event handler, to a row click
  tr.addEventListener('click', (event) => {pruneRow(event)});

  // append row to table
  tbody.appendChild(tr);
  mixed.appendChild(tbody);
});

function pruneRow(event) {
  // remove row
  const parent = event.target.parentNode.parentNode; //td->tr->tbody
  const oldRow = parent.removeChild(event.target.parentNode);

  // dataString from removed row data
  let dataString = '';
  oldRow.childNodes.forEach(row => {
    dataString += `${row.firstChild.data} `;
  });

  // output message on the page
  const msg = document.createTextNode(`removed ${dataString}`);
  const p = document.createElement('p');
  p.appendChild(msg);
  document.getElementById('result').appendChild(p);
}

