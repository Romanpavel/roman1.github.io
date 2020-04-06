// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // loop over array
  for (var i = 0; i < array.length; i++) {
    
    // return array with the index of i
    
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // loop over array in reverse starting from the last index 
  
  
  for (var i = array.length - 1; i >= 0; i--) {
    
    // return index i to the screen
    
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array 
  
  var x = [];
  
  // for loop in objcet
  
  for (var key in object) {
    
    // push eech key into array
    
     x.push(key);
  }
  return x; // return array containing object keys
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // loop over object
  
  for (var key in object) {
    
    // print the key to the screen
    
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // variable to hold an array
  
  var x = [];
  
  // loop over object
  
    for (var value in object) {
      
      // push the index in value of object into array
      
     x.push(object[value]);
  }
  return x;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // loop over the object
  
  for (var value in object) {
    
    // access value from object array
    
    console.log(object[value]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  // variable that holds count starts at 0
  
   var count =  0;
 
 // loop over objcet and run incrementor
 
  for (var keyVal in object) {
   count++;
  }
  return count; // total lenght of object pairs
  


  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
// create a array to pass in keys of object

var myArray = [];

// create a for in loop with a variable of key to go through an object

for (var key in object) {
  
  // calling myArray and inserting through .unshift passing in key
  
  myArray.unshift(key);
}

// create a for loop with starting at 0 ending at length og array, increasing by 1

for (var i = 0; i < myArray.length; i++) {
  
  // access the number i from myArray from object
  
  
  console.log(object[myArray[i]]);
}

  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}