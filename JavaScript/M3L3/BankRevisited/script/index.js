'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';
import {Account, Bank} from './Bank.js';

const _seeder = new seedGenerator();
const bankID = document.querySelector('#bankID');
const acountList = document.querySelector('#accountList');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

//set EventHandler
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);

//Create accounts and bank
const baccounts = new Account().createRandomMany(_seeder, 25);
const bank1 = new Bank("Martins bank1", baccounts );

//list paging
let currentPage = 0;
const pageSize = 10;
const maxNrPages = Math.ceil(baccounts.length/pageSize);


//Initial page presentation
bankID.innerHTML = bank1.toString();
removeAllChildNodes(acountList);
renderAccounts(0);


function renderAccounts(renderPage) {
    
    const pData = baccounts.slice(pageSize*renderPage, pageSize*renderPage+pageSize);
    for (const acc of pData) {
        
        const li = document.createElement('li');
        li.innerText = acc.toString();

        acountList.appendChild(li);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickNext (event)  {
    currentPage++;
    if (currentPage > maxNrPages-1) currentPage = maxNrPages-1;

    removeAllChildNodes(acountList);
    renderAccounts(currentPage)
};

function clickPrev (event)  {
    currentPage--;
    if (currentPage < 0) currentPage = 0;

    removeAllChildNodes(acountList);
    renderAccounts(currentPage)
};


/* Exercise
1. Add buttons to show last and first page of the list
2. Use above structure to create a webpage to show a list of Vehicles.
   M2L3 vehicleExercise has the class to generate vehicles
*/