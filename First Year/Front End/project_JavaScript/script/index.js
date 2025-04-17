`use strict`;

import musicService from './../script/music-group-service.js';


(async () => {

    //Initialize the service
    const _service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
  
    //Read Database info async
    let data = await _service.readInfoAsync();
    console.log(data);

const musicGroups = document.querySelector('#bandList');


const songs = await _service.readMusicGroupsAsync(0);
const nrOfPages = songs.dbItemsCount;
let _data = await _service.readMusicGroupsAsync(0, true, null, nrOfPages);

let musicArray = _data.pageItems;


console.log(_data);

//list paging
 let currentPage = 0;
const pageSize = 10;
const maxNrPages = Math.ceil(musicGroups.length/pageSize);

removeAllChildNodes(musicGroups);
renderGroups(0);

function renderGroups(renderPage) {
    
    const pData = musicArray.slice(pageSize * renderPage, pageSize * renderPage + pageSize);
   
  for(const item of pData){
      
    const li = document.createElement("div");
    li.classList.add('col-md-12', 'themed-grid-col');
    li.innerHTML = `${item.name}`
    musicGroups.appendChild(li);
  }

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
} 
  
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
btnNext.addEventListener('click', clickNext);
btnPrev.addEventListener('click', clickPrev);




function clickNext (event)  {
    currentPage++;
    if (currentPage > maxNrPages-1) currentPage = maxNrPages-1;

    removeAllChildNodes(musicGroups);
    renderGroups(currentPage) 
};

function clickPrev (event)  {
    currentPage--;
    if (currentPage < 0) currentPage = 0;

    removeAllChildNodes(musicGroups);
    renderGroups(currentPage) 
};



  })();


