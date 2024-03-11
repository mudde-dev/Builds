//super simple server using expressjs

//Install expressjs for running a small server

//https://expressjs.com/en/starter/hello-world.html
//https://expressjs.com/en/starter/installing.html

//in your webapplication project's server directory open a terminal
//install package.json using 'npm init -y'
//install validator using npm install express
//Now you should have two json files, and a node modules directory: node_modules, package-lock.json, package.json

//install cors
//https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

//install formidable
//https://www.npmjs.com/package/formidable

//required node library
const path = require('path');
const fs = require('fs');

//from the downloaded npm
const express = require('express');
const cors = require('cors');
const formidable = require('formidable');

//init express
const app = express();
const port = 3000;
//init cors
app.use(cors({
  origin: '*'
}));


//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


app.get('/', (req, res) =>
  res.send('Example server for receiving JS POST requests')
);

app.post('/select', (req, res) => {
  const form = formidable();

  form.parse(req, (err, fields) => {
    if (err) {
      return;
    }

    for (const selItem of selectionItems) {

      if (fields.niceThing === selItem.content) {
        res.send(selItem.items);
        return;
      }
    }

    //No items could be found, send and empty array
    res.send([]);
  });
});

//Initialize application data
//Note the trick to declare and execute in one go
let selectionItems = (function initAppData() {

  //initialize if it does not exist as file, otherwise load it
  if (fileExists(`selection-items.json`)) {

    const selItems = readJSON(`selection-items.json`);
    return selItems;
  }

  //If the file does not exist, lets create it with default values
  //as initial application data
  const selItems = [
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

  writeJSON(`selection-items.json`, selItems);
})();



//helper functions to read and write JSON
function fileExists(fname) {
  const appDataDir = path.join(__dirname, `app_data`);
  return fs.existsSync(path.resolve(appDataDir, fname));
}

function writeJSON(fname, obj) {
  const appDataDir = path.join(__dirname, `app_data`);
  fs.writeFileSync(path.resolve(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.join(__dirname, `app_data`);
  obj = JSON.parse(fs.readFileSync(path.resolve(appDataDir, fname), 'utf8'));
  return obj;
}