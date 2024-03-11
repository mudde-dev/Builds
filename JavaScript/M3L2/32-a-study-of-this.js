//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//A function's this keyword behaves a little differently in JavaScript compared to other languages.
//In most cases, the value of this is determined by how a function is called (runtime binding). 
//ES5 introduced the bind() method to set the value of a function's this regardless of how it's called
//ES2015 introduced arrow functions where this is the value of the enclosing context.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
/*
console.group('Global context - this is undefined');
function funcGlobalContext() {
    console.log(this);          //undefined
}

let a = 'Global Context';
console.log(a);
console.log(this);
console.log(this.a);            //undefined
console.groupEnd();
*/

console.group('this - Strange behaviour: Object context');
const obj = {
    prop: 'Object Context',
    funcObjectContext: function () {
        console.log(this);
        console.log(this.prop);

              //setTimeout(this.incrementCounter.bind(this), 1000);

        function funcNested() {
            console.log(this);          //NOTE: this is now undefined
            console.log(this.prop);     //ERROR: as this is undefined
        };

        //funcNested();                   //Call will lead to incorrect this

        //Correction. Below will create a new function bound to this.
        const funcNestedCorrected = funcNested.bind(this);
        funcNestedCorrected();
    },
    toString: function () { return this.prop }
};
obj.funcObjectContext();
console.log('' + obj);
console.groupEnd();

/*
console.group('this - Strange behaviour: Function-as-class context');
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

        function funcNested() {
            console.log(this);          //NOTE: this is now undefined
            console.log(this.prop);     //ERROR: as this is undefined
        };
        funcNested();

        //Correction. Below will create a new function bound to this.
        const funcNestedCorrected = funcNested.bind(this);
        funcNestedCorrected();

    }
}
const fc = new funcClass();
fc.funcEmbedded(); 
console.groupEnd();


console.group('this - Strange behaviour: Class-as-class context');

class classClass {

    constructor () {
    console.log(this);           //classClass

    //but you use it to define properties, when later executed
    this.prop = "Class-as-class context";
    }

    funcEmbedded () {
        console.log(this);
        console.log(this.prop);

        function funcNested() {
            console.log(this);          //NOTE: this is now undefined
            console.log(this.prop);     //ERROR: as this is undefined
        };
        funcNested();

        //Correction. Below will create a new function bound to this.
        const funcNestedCorrected = funcNested.bind(this);
        funcNestedCorrected();
        
    }
}

const cc = new classClass();
cc.funcEmbedded(); 
console.groupEnd();
*/