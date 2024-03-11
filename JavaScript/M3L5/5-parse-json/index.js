//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

const jsonObj = { prop1: "test", result: true, num: 5.44, name: 'Joe', cts: [45, 62, 13], propObj: { prop1: "prop1" } };

//note how ' has been converted into "
const jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

const obj1 = JSON.parse(jsonString);
console.log(obj1);


//using reviver function to convert Joe into Mike, add 5 to cts array element, and remove last object. 
//Note parse only take "" for strings
const obj = JSON.parse(jsonString, (key, value) => {

  if (value === "Joe")
    return "Mike";

    if (key === "cts")
    {
      value = value.map(item => item + 5);
      return value;
    }

    if (key === "propObj")
    return undefined;   // removes the property key/value    

    //Otherwise always return the value
  return value;
});
console.log(obj); 
