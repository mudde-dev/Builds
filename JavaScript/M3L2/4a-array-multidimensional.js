'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

console.group('Declaring a multidimesional array (array-in-a-array')
const books = [
  ['A Tale of Two Cities', 'Charles Dickens', 'English', '1859', '200 million',], //note last comma in the array is ignored
  ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '150 million'],
  ["Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'English', '1997', '120 million']];

console.log(books);
console.groupEnd();

console.group('Iterating over a multidimension array')

//using for..of loop
for (const book of books)
  for (const item of book)
    console.log(`${book}: item: ${item}`)

//using for..in  - is gives idx of every item will be given
for (const idxBook in books)
  for (const idxItem in books[idxBook])
    console.log(idxBook, idxItem, books[idxBook][idxItem]);

//using a classic for loop
for (let idxBook = 0; idxBook < books.length; idxBook++)
  for (let idxItem = 0; idxItem < books[idxBook].length; idxItem++)
    console.log(idxBook, idxItem, books[idxBook][idxItem]);


//using foreach and arror function
books.forEach((book) => {
  book.forEach((item) => (console.log(`${book}: item: ${item}`)))
});
console.groupEnd

//Exercise
//1. iterate over the two-dimensional array using array.prototype.forEach
//2. Create a tree dimensional array (think rubriks cube) and iterate over each element using for..of
