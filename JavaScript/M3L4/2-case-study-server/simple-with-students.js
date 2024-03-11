
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

//required node library
const path = require('path');
const fs = require('fs');

//from the downloaded npm
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//from model
const studentScore = require('./model/studentScore.js');

//initialize cors
app.use(cors({
  origin: '*'
}));

//send a simple Hello World in response to 
//http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//sending a list in response to 
//http://localhost:3000/students/?number
app.get('/students', (req, res) => {

  //get the query parameter 'number', if it is undefined, send all
  //otherwise ensure number cannot be more than student.length
  let numberOfStudents = Number(req.query.number ?? students.length);
  numberOfStudents = Math.min(numberOfStudents, students.length);

  //Note how I use slice to return requested nr of students
  response = JSON.stringify(students.slice(0,numberOfStudents));
  res.send(response);
});


//Start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


//Initialize application data
//Note the trick to declare and execute in one go
let students = (function initAppData() {

  //initialize if it does not exist as file, otherwise load it
  if (fileExists(`students.json`)) {

    return readJSON(`students.json`);
  }

  //Here we can create some initial application data
  let students = studentScore.createRandom(100);
  writeJSON(`students.json`, students);
  return students;
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