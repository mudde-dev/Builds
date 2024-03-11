//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

console.group('Standard function')
function calcRectArea (width, height) {
    return width * height;
};

console.log(calcRectArea(3, 4));
console.groupEnd();

console.group('Function expression');
//When a function is assigned to a variable or property, or used in an expression is is called a function expression
let getRectArea = function (width, height) {
    return width * height;
};

console.log(getRectArea(3, 4));
console.groupEnd();


//function expressions can also be assigned to object properties
//NOTE: in the function 'this'referes to the object, i.e. r1
let r1 = {height: 100, width:100};
r1.getRectArea = function () {
    return this.width * this.height;
};

console.log(r1.getRectArea());


console.group('Arrow function')
//function expressions can also be expressed as arrow function
getRectArea = (width, height) => {
    return width * height;
};
const getAnotherRect = getRectArea;
console.log(getRectArea(3, 4));
console.log(getAnotherRect(3, 4));

//when an arrow function only has a single return statement remove body {} and return
getRectArea = (width, height) => width * height;
console.log(getRectArea(3, 4));
console.log(getRectArea(5, 2));

//when only a single parameter, also the parenthesis can be removes
const fDouble = x => x*2;
console.log(fDouble(3));



//arrow functions can also be assigned to object properties
//NOTE: in the arrow function 'this'referes to the context, in this case undefined.
r1 = {height: 50, width:50};
r1.getRectArea = ()=> r1.width * r1.height;

console.log(r1.getRectArea());
console.groupEnd();


console.group('Arrow functions are very ofthen used as argument to another function')

//Arrow functions provides an excellent way of submitting on the fly a function as an argument
const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map( number => number**2 );

console.log(numbers);
console.log(squares);

numbers.forEach(n=>n*n);
console.log(numbers);

console.groupEnd();