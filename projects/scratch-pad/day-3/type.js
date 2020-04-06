// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
// return statement, using the function of .isArray with the parameter (value)

return Array.isArray(value);
    
    // can't use typeof on array bc all arrays are objects
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    /* if statement that sees if value is an object
    first make sure that value is not an array, null, or date, AND it is an object
    */
    
 if (value !== null && Array.isArray(value) === false && !(value instanceof Date) && typeof value === 'object') {
     return true;
 } else {
     return false;
 }
 
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // test if its an array
    
if (Array.isArray(value) === true) {
        return true;
        
        // test if its an object
        
    } else if (value !== null && Array.isArray(value) === false && !(value instanceof Date) && typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    // test if string 
    
    if (typeof value === 'string') {
        return 'string';
        
        // test if its an array
        
    } else if (Array.isArray(value) === true) {
        return 'array';
        
        // test if its an object
        
    } else if (value !== null && Array.isArray(value) === false && !(value instanceof Date) && typeof value === 'object') {
        return 'object';
        
        // test if its undefined, number, boolean using typeof
        
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
        
        // test value of null
        
    } else if (value === null) {
        return 'null';
        
        // test date using instanceof
        
    }  else if (value instanceof Date) {
        return 'date';
        
        // test funnction at the end provided that all other conditions are tested false
        
    } else if (typeof value === 'function') {
        return 'function';
    } 
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
