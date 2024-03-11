//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://newsapi.org/docs/endpoints/top-headlines
//Example where News do not allow cors on developer license
const apiKeyNews = "d318329c40734776a014f9d9513e14ae";
//const apiKeyNews = "6a2aa4837b194bbdb423edf71b380e8b"

async function myFetch(url) {
  try {

    let res = await fetch(url);
    if (res.ok) {

      console.log("Request successful");

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
//See analogy on making in C# main async
//I make main as an asych arrow function with immediate execution of syntax, (async() => {})();

(async () => {

  //Here I write all the code to be executed at script top level, c# main level
  const newsList = document.getElementById('results');
  const newsCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  for (const category of newsCategories) {

    const url = `https://newsapi.org/v2/top-headlines?country=se&category=${category}&apiKey=${apiKeyNews}`;
    const news = await myFetch(url);

    console.log(news);

    //Create a header of the news category
    const newsCat = document.createElement('h2');
    newsCat.innerHTML = category;
    newsList.appendChild(newsCat);

    //create a categoryList
    const categoryList = document.createElement('ul');
    news.articles.forEach(article => {
      const listItem = document.createElement('li');
      listItem.innerText = article.title;
      categoryList.appendChild(listItem);
    });
    newsList.appendChild(categoryList);
  }
})();