//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

//https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests

//Let's use fetch to access and modify a database through a WebApi using GET, POST, PUT, DELETE requests
//Let's use my WebApi of the most famous music bands through out history
//https://appmusicwebapinet8.azurewebsites.net/swagger/index.html

const url = "https://appmusicwebapinet8.azurewebsites.net/api";

async function myFetch(url, method = null, body = null) {
  try {

    method ??= 'GET';
    let res = await fetch(url, {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });

    if (res.ok) {

      console.log(`\n${method} Request successful @ ${url}`);

      //get the data from server
      let data = await res.json();
      return data;
    }
    else {

      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${res.status}`);
      alert(`Failed to recieved data from server: ${res.status}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

//Lets use myFetch. As it is an async method and I cannot have await at top level, I need to make trick.
//I make main as an asych arrow function with immediate execution of syntax, (async() => {})();

(async () => {

  //Here I write all the code to be executed at script top level, c# main level

  //Use GET to read first page of music groups
  //let reqUrl = `${url}/Read?flat=false&pageNr=0&pageSize=10`;  
  let reqUrl = `${url}/csMusicGroups/Read?flat=false&pageNr=0&pageSize=10&filter=Floyd`;
  let data = await myFetch(reqUrl);
  if (data) {
    console.log(`The database contains\n ${data.dbItemsCount} items`);
    console.log(` ${data.pageCount} pages of maximum ${data.pageSize} items per page`);

    //List the a page of 10 musicgroups
    console.log(`Items in page ${data.pageNr}`);
    data.pageItems.slice(0, 10).forEach(item => { console.log(item) });
  }

  //Use GET specific music groups
  reqUrl = `${url}/csMusicGroups/ReadItem?flat=false&id=${data.pageItems[0].musicGroupId}`;
  data = await myFetch(reqUrl);
  console.log(data);

  //Use POST to create a new music group
  reqUrl = `${url}/csMusicGroups/CreateItem`;
  let newItem = {
    "musicGroupId": "00000000-0000-0000-0000-000000000000",
    "name": "Honkedy dori with a heart full of love",
    "establishedYear": 2024,
    "genre": 1,
    "albumsId": [],
    "artistsId": []
  };

  data = await myFetch(reqUrl, 'POST', newItem);
  console.log(data);

  const musicgroupId = data.musicGroupId;
  //Use Post to add an Album to the newly created music group
  reqUrl = `${url}/csAlbums/CreateItem`;
  newItem = {
    "albumId": "00000000-0000-0000-0000-000000000000",
    "seeded": true,
    "name": "Fire and ice on a mountain of snow",
    "releaseYear": 2024,
    "copiesSold": 100,
    "musicGroupId": `${musicgroupId}`
  }
  data = await myFetch(reqUrl, 'POST', newItem);
  console.log(data);
  
  //Use POST to add an Artist to the newly created music group
  reqUrl = `${url}/csArtists/UpsertItem`;
  newItem = {
  "artistId": "00000000-0000-0000-0000-000000000000",
  "seeded": true,
  "firstName": "Huckleberry",
  "lastName": "Finn",
  "birthDay": "1964-01-02",
  "musicGroupsId": [
    `${musicgroupId}`
    ]
  }
  data = await myFetch(reqUrl, 'POST', newItem);
  console.log(data);

  //Use PUT to change the name of the newly created music group
  reqUrl = `${url}/csMusicGroups/ReadItemDto?id=${musicgroupId}`;
  data = await myFetch(reqUrl);
  data.name = data.name.replace(`Honkedy`, `Toppiwhoppy`);
  reqUrl = `${url}/csMusicGroups/UpdateItem/${musicgroupId}`;
  data = await myFetch(reqUrl, 'PUT', data);
  console.log(data);

  //Use DELETE to remove the newly created music group
  reqUrl = `${url}/csMusicGroups/DeleteItem/${musicgroupId}`;
  data = await myFetch(reqUrl, 'DELETE');
  console.log(data);

})();

