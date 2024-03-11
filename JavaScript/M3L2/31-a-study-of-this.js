//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//A function's this keyword behaves a little differently in JavaScript compared to other languages.
//In most cases, the value of this is determined by how a function is called (runtime binding). 
//ES5 introduced the bind() method to set the value of a function's this regardless of how it's called
//ES2015 introduced arrow functions where this is the value of the enclosing context.

console.group('Derived class context');

class classBase {

    constructor() {
        console.log(this);          //classBase or classChild

        //but you use it to define properties, when later executed
        this.prop = "Base class context";
    }

    funcEmbedded() {
        console.log(this);
        console.log(this.prop);
    }
}

class classChild extends classBase {

    constructor() {
        //console.log(this);           //ERROR, must call super() first
        super();
        console.log(this);             //now it is set classChild


        //but you use it to define properties, when later executed
        this.prop = "child class context";
    }

    funcEmbedded() {
        super.funcEmbedded();       //Note. due to this even super is printing child property
        console.log(this);

        //When an object has an own property and inherits a property with the same name, t
        //the own property takes precedence over the inherited one.
        console.log(this.prop);
    }
}
const bc = new classBase();
bc.funcEmbedded();

const dc = new classChild();
dc.funcEmbedded();
console.groupEnd();