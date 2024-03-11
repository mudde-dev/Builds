//super simple server using expressjs

//Install expressjs for running a small server

//https://expressjs.com/en/starter/hello-world.html
//https://expressjs.com/en/starter/installing.html

//Midleware in express.js to read json body
//https://expressjs.com/en/4x/api.html#express.json

//in your webapplication project's server directory open a terminal
//install package.json using 'npm init -y'
//install express using npm install express
//Now you should have two json files, and a node modules directory: node_modules, package-lock.json, package.json

//install cors
//https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

//required node library
const path = require('path');
const fs = require('fs');

//from the downloaded npm
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//initialize cors
app.use(cors({
  origin: '*'
}));

//needed to read the body in a post request
app.use(express.json());


//send a simple Hello World in response to 
//http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('hello again');
});

//sending a simple json string in response to 
//http://localhost:3000/ingredients
app.get('/ingredients', (req, res) => {

  response = readJSON(`ingedients.json`);
  res.send(response);
});

app.post('/ingredients', (req, res) => {

  const b = req.body;
  writeJSON('ingredients.json', b);

  //respons with the json file
  res.json(b);
});

//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})



//Initialize application data
function initAppData() {

  //Here we can create some initial application data
  const ingredients = [
    {
      "id": "1",
      "item": "Bacon"
    },
    {
      "id": "2",
      "item": "Eggs"
    },
    {
      "id": "3",
      "item": "Milk"
    },
    {
      "id": "4",
      "item": "Butter"
    }
  ];

  writeJSON(`ingedients.json`, ingredients);
}

//helper functions to read and write JSON
function writeJSON(fname, obj) {
  const appDataDir = path.join(__dirname, `app_data`);
  fs.writeFileSync(path.resolve(appDataDir, fname), JSON.stringify(obj));
}

function readJSON(fname) {
  const appDataDir = path.join(__dirname, `app_data`);
  obj = JSON.parse(fs.readFileSync(path.resolve(appDataDir, fname), 'utf8'));
  return obj;
}