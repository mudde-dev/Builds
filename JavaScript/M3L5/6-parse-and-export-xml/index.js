//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/DOMParser

//Notice the  (async () => {.....}());  wrapping
//This is done as response.text() has multiple promises to complete. If you try without, you will ge an 'Promises pending'error.
//The trick is to await for the data to be completed via an await 
//But the script at top level does not allow an await without async - therefore the wrapping.

// the syntax (function name () {...})(); means declaration immediately follow by execution. 
// this works with arrow functions as well and then the syntax is (()=>{...})();
// in the async case it becomes: (async () => {.....}());

 
(async () => {
  // fetch an XML document
  async function fetchData(url) {
  
    const response = await fetch(url);
    const data = await response.text();
    return data;
  }
  
  function parseXML(data) {
  
    const parser = new DOMParser();
    const XMLDocument = parser.parseFromString(data, 'text/xml');
    return XMLDocument;
  }
  
  function displayTitles(xml, selector) {
  
    // HTML element where the results will be displayed
    // the markup contains a ul with an id of "results"
    const listElem = document.getElementById('results');
  
    // get the article titles
    // each is wrapped in a <title> tag within an <item> tag
    const titles = xml.querySelectorAll(selector);
  
    // loop over each title in the XML and append its text content to the HTML list
    titles.forEach(title => {
      const listItem = document.createElement('li');
      listItem.innerText = title.textContent;
      listElem.appendChild(listItem);
    });
  }
  
  //processing first url
  let url = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
  let data = await fetchData(url);
  console.log(data);
  
  let dataAsXML = parseXML(data);
  console.log(dataAsXML);
  
  displayTitles(dataAsXML, 'item title');
  
  //processing an xml file on the server
  url = './breakfast.xml';
  data = await fetchData(url);
  console.log(data);
  
  dataAsXML = parseXML(data);
  console.log(dataAsXML);
  
  displayTitles(dataAsXML, 'food name');
  
  //Set a click event on the <a> tag for download
  //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
  //https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  const download = document.getElementById('export');
  download.addEventListener('click', (event) => {

    const blob = new Blob([data], { type: 'text/xml'});
    event.target.href = URL.createObjectURL(blob);
    event.target.download = 'breakfast.xml';

  });

})();


/* Exercise 
1. In case-study-students, add a button in the table header that exports the students in json format
*/
