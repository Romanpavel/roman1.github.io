/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {
    
};

animal.species = 'lion';

animal['name'] = 'Joe'; 

animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
var noises = []; 

noises[0] = 'RAWR';

noises.push('Meow');

noises.unshift('Heya');

noises[noises.length] = 'Simba';

console.log(noises.length);

console.log(noises[noises.length - 1]);

console.log(noises)

////////////////////////////////
//////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises; 

noises.push('hello');

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  // bracket notation, dot notation, and for in loop
 * 2. What are the different ways of accessing elements on arrays?
 *   // bracket notation and for loops
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

console.log(animals);

var tiger = { species: 'tiger', name: 'truman', noises: ['rawr', 'meow'] };

animals.push(tiger);

var cow = { species: "cow", name: 'jesse', noises: ['moo', 'mooo'] };

animals.push(cow);

console.log(animals);

console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// allows to agregate species as single elements

var friends = [];

function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
   return randomIndex;
   
   friends.push(animals[randomIndex].name);
}

animals[0].friends = friends;
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}