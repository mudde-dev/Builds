'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class Chef
{
  //private property definition, must be done here in the class
  secret_recipe = "Bavarian knödeln";

  //alternative public property definition
  chefName = 'Boring'; 
 
  constructor()
  {
    //public property definition and assignment
    this.favoriteDish = 'Nothing';
  }

  //class method
  toString() {return `Hello, my name is ${this.chefName}. I am ${this.age} years old and I love ${this.favoriteDish}. ` +
   `The secret_recipe is ${this.secret_recipe}.`;}
}

class GermanChef extends Chef
{
  constructor()
  {
    super();
    this.chefName = 'Franz'; 
    this.favoriteDish = 'Wursts';
    this.age = 30;
    this.secret_recipe = "Sauerkraut";
  }
}
class ItalianChef extends Chef
{
  constructor()
  {
    super();
    this.chefName = 'Mauro'; 
    this.favoriteDish = 'Spagetti';
    this.secret_recipe = "Pizza Amore";
    this.age = 25;
  }
}

let chef = new Chef();
console.log(''+ chef);

let germanChef = new GermanChef();
console.log(''+ germanChef);

let italianChef = new ItalianChef();
console.log(''+ italianChef);

console.log(chef.secret_recipe);        
console.log(germanChef.secret_recipe);  //this is the secret_recipe declared in germanChef only

