// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
// create a function to compare what is bigger to return true



return function beGreat(value) { 

// if statement using compartive to test given paramter base agaisnt parameter value

        if (value > base){
            return true;
        } else { 
            return false;
        }

};
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // create a function
    
    return function beLess(value) {
        
        // use if statement to compare 2 parameters

        if (value < base){
            return true;
        } else {                 // else statement for dichotomy
            return false;
        }

};
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // create a variable newStart to ensure startsWith is same case as parameter string
    
    var newStart = startsWith.toLowerCase();
    
    // create function with parameter string
    
    return function equals (string) {
        
        /* create if statement to compare variable newStart to parameter string
        to access first character of string, access index [0]
        make sure case of string matches var newStart using fucntion .toLowerCase
        */
        
        if (newStart === string[0].toLowerCase()) {
            return true;
        } else {return false;}
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  
    // create new varibale to make sure endsWith is same case using .toLowerCase
    
    var newEnd = endsWith.toLowerCase();
    
    // create function
    
    return function equals (string) {
        
        /* create if statement
        compare to string parameter
        access last character by using .length - 1
        */
        
        if (newEnd === (string[string.length - 1]).toLowerCase()) {
            return true;
        } else {return false;}
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // variable to pass in modify
    
    var collection = [];
    
    // loop over array 
    
    for (var i = 0; i < strings.length; i++) {
        
        // push result of modify per index i
        
       collection.push(modify(strings[i]));
    }
    return collection;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // var strings =["roman", "roger", "senai"];
    // create an array to hold returns of test function booleans
    
    
        
        // for loop to go over the array
        
    for (var i = 0; i < strings.length; i++) {
        
        // if any string comes back false the entire array is false
        
      if (test(strings[i]) === false) {
          return false;
      } 
    }
    
    return true;
 
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}