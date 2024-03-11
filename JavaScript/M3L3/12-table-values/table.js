'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

let sum = 0;

// use querySelector to find all second table cells
const cells = document.querySelectorAll('td:nth-of-type(2)');

// iterate over each and parsing the textContent of each node of each node,
cells.forEach(cell => {
  sum += Number.parseFloat(cell.firstChild.textContent);
});

// now add sum to end of table
const newRow = document.createElement('tr');

// first cell
const firstCell = document.createElement('td');
const firstCellText = document.createTextNode('Sum:');
firstCell.appendChild(firstCellText);
newRow.appendChild(firstCell);

// second cell with sum
const secondCell = document.createElement('td');
const secondCellText = document.createTextNode(sum);
secondCell.appendChild(secondCellText);
newRow.appendChild(secondCell);

// add row to table
document.getElementById('table1').appendChild(newRow);
