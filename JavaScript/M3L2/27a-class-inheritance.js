'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class mySuper {

  constructor() {
    this.superProp1 = 'superProp1';
  }

  superMethod1() {
    console.log(`superMethod1 says this.superProp1=${this.superProp1}`);
  }
}


class myChild extends mySuper {

  constructor ()
  {
    super();
    this.superProp1 = 'childProp1';
  }
  childMethod1() {
    console.log(`childMethod1 says this.superProp1=${this.superProp1}`);     //note you will get this.superPropt

    //Note that instance fields are set on the instance instead of the constructor's prototype, 
    //so you can't use super to access the instance field of a superclass.
    console.log(`childMethod1 says super.superProp1=${super.superProp1}`);    //will not work -> undefined
    
    //but you can access a function in super
    super.superMethod1();
  }
}

const s = new mySuper();
s.superMethod1();


const c = new myChild();
c.childMethod1();
c.superMethod1();       //super-duper polymorfism
