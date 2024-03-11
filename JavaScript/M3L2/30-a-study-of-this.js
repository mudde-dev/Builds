//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//A function's this keyword behaves a little differently in JavaScript compared to other languages.
//In most cases, the value of this is determined by how a function is called (runtime binding). 
//ES5 introduced the bind() method to set the value of a function's this regardless of how it's called
//ES2015 introduced arrow functions where this is the value of the enclosing context.

console.group('Global context - this is undefined');

(function funcGlobalContext(param1) {
    const a = param1
    console.log(this);          //undefined
})(3);

let a = 'Global Context';
console.log(a);
console.log(this);
console.log(this.a);            //undefined
console.groupEnd();


console.group('Object context');
const obj = {
    prop: 'Object Context',
    funcObjectContext: function () {
        console.log(this);
        console.log(this.prop);
    },
    toString: function () { return this.prop }
};
obj.funcObjectContext();
console.log('' + obj);
console.groupEnd();


console.group('Function-as-class context');
//constructor
function funcClass() {
    console.log(this);           //funcClass due to the prototype
                                 //Note the difference to Global Context

    //but you use it to define properties, when later executed
    this.prop = "Function-as-class context";
}
funcClass.prototype = {
    funcEmbedded: function () {
        console.log(this);
        console.log(this.prop);
    }
}
const fc = new funcClass();
fc.funcEmbedded(); 
console.groupEnd();


console.group('Class-as-class context');

class classClass {

    constructor () {
    console.log(this);           //classClass

    //but you use it to define properties, when later executed
    this.prop = "Class-as-class context";
    }

    funcEmbedded () {
        console.log(this);
        console.log(this.prop);
    }
}

const cc = new classClass();
cc.funcEmbedded(); 
console.groupEnd();
*/