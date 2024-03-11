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


//You can use the same technique as loading xml to insert html snippets in an html file
(async () => {

  // fetch an HTML snippet
  async function fetchHTML(url) {
  
    const response = await fetch(url);
    const data = await response.text();
    return data;
  }
  
  //processing an xml file on the server
  const url = './text.html';
  const html = await fetchHTML(url);
  
  //set the HTML code into the snippetWrapper
  const snippetWrapper = document.querySelector('#snippetWrapper');
  snippetWrapper.innerHTML = html;
})();


/* Excercise
1. load the calculator from M3L4 case-study-calculator as a html sippet. You style it by adding the right css to index.htm (not loading).
*/
 
