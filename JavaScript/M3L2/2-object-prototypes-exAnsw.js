'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


/*
//assigning prototype
let _proto = {prop1: "val1"};
let o1 = Object.create(_proto);
console.log(o1);

//an prop with same name as prototype prop will take precedence
_proto.prop1 = "new prot value";
o1.prop1 = "o1 prop1";
o1.prop2 = "o1 prop2";
console.log(o1.prop1);
console.log(o1.prop2);

//deleting object prop brings back prototype prop
delete o1.prop1;
console.log(o1.prop1);
console.log(o1.prop2);

//deleting prototype prop will give an undefinded prop
delete _proto.prop1;
console.log(o1.prop1);



console.group('Every object has a prototype, empty object has Object as prototype')
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// https://www.w3schools.com/js/js_object_prototypes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

let o = {greeting:'hello'};
_proto = Object.getPrototypeOf(o);

console.log(_proto);            //Object literals {} has Object as prototype, inherited properties and functions from Object
console.log(o.toString());      //Object has toString() defined for example

//now I assign my own toString directly to object
o.toString = function () { return `${this.greeting}`; };
console.log(o);                 //o is still written out as an object
console.log('' + o);             //See the trick here, forcing o to use toString()

//I can change toString() of the prototype object without affecting the child
_proto.toString = function () { return `${this.greeting}`; };
console.log('' + _proto);    //Prototype, notice property greeting is undefined in the property
console.log('' + o);         //Child, notice property greeting is now defined as it is the object
console.groupEnd();


console.group('Properties are inherited from prototype object');
_proto = { prot_prop1: 'prot_prop1-original-value', prot_prop2: 'prot_prop2-original-value' };

let obj1 = Object.create(_proto);    //obj1 now has _proto as prototype
let obj2 = Object.create(_proto);    //obj1 now has _proto as prototype

console.log(obj1.prot_prop1, obj1.prot_prop2);  //And the properties are inherited
console.log(obj1);                              //But not visible when you write the object
console.log(_proto);              //Only when showing prototype

for (const props in obj1) { console.log(props); } //ofcourse, you can iterate over the proto props
for (const props in obj2) { console.log(props); } //ofcourse, you can iterate over the proto props
console.groupEnd();


console.group('Properties inherited are readonly')
//A Key feature of js is that inheritance is only happening when reading a proto property, not when setting. 
//when setting a proto prop the prop is implictly added to the object
//Unless getters and setters are used in the prototype

obj1.prot_prop1 = 'prot_prop1-new-value_1';          //We implictly add a new property to obj1

console.log(_proto);                                 //_proto props are unchanged
console.log(obj1);                                   //prot_prop1 is added to obj1
console.log(obj2.prot_prop1);                                   //original property from _from proto is used
console.log(obj1.hasOwnProperty('prot_prop1'));   //true - hasOwnProperty() can be used to test if it is a prototype property or not
console.log(obj2.hasOwnProperty('prot_prop1'));   //false
console.groupEnd();


console.group('But you can change inherited properties by accesing the prototype directly')
_proto.prot_prop2 = 'prot_prop2_changed_in_proto';   //We explicitly change the proto property
//All objects that has _proto as prototype will then have changed
console.log(obj1.prot_prop2);                     //prop updated at proto
console.log(obj2.prot_prop2);                     //prop updated at proto

//Unless an object already has a property with same name as _proto property
_proto.prot_prop1 = 'prot_prop1_changed_in_proto';   //We explicitly change the proto property
console.log(obj1.prot_prop1);                     //property from obj1 used
console.log(obj2.prot_prop1);                     //prop updated at proto

console.groupEnd();
*/

console.group(`Exercises`)
const _address = {country: `Sweden`};
const _friend1 = Object.create(_address);
const _friend2 = Object.create(_address);
_friend1.name = `Sam`;
_friend2.name = `Frodo`;

console.log(_friend1);
console.log(_friend1.country);
console.log(_friend2);
console.log(_friend2.country);

_address.country=`Denmark`;
console.log(_friend1);
console.log(_friend1.country);
console.log(_friend2);
console.log(_friend2.country);

_friend2.country=`Finland`;
console.log(_friend1);
console.log(_friend1.country);
console.log(_friend2);
console.log(_friend2.country);

_address.toString = function () {return `Hi, I am ${this.name}. I live in ${this.country}`};
console.log(''+_friend1);
console.log(''+_friend2);

_address.isEqual = function (obj) {return this.country === obj.country};
_friend2.country = _friend1.country;
console.log(_friend1.isEqual(_friend2));

_address.isEqual = function (obj) {return this.country === obj.country && this.name === obj.name};
_friend2.name = _friend1.name;
console.log(_friend1.isEqual(_friend2));

console.groupEnd();

/* Exercise
1. Create an object _address and give it a property country with value "Sweden"
2. Create two objects _friend1, _friend2 using _address as prototype
3. Give _friend1 and _friend2 properties name and assing it to "Sam" resp "Frodo"
    - What country do Sam and Frodo live in?
    - Set _address.country to "Denmark". What country do Sam and Frodo live in?
    - Set _friend2.country to "Finland". What country do Sam and Frodo live in?

4. assign to _address.toString a function that presents the friend with name and country
5. assign to _address.isEqual(obj) a function that returns true if this and obj lives in the same country
6. modify to _address.isEqual(obj) so it returns true if this and obj lives in the same country and has same name
*/
