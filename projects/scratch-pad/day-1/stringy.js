// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
 
    
return string.length // the .length trial shows how many characters are in a string

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

return string.toLowerCase() // to lowercase a string, the command "toLowerCase" is inserted with parentheses that hold the string value

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

return string.toUpperCase() // to uppercase a string use the command .toUpperCase and pass through ()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    
    // create a variable where the string is lowercased
    
    var lowerCase = string.toLowerCase();

    // from the variable created lowerCse using the .split function to seperate the string 
    
  var arraySplit = lowerCase.split(' ');

// after the string is seperate i can insert dashes through the .join function and inserting '-'


return arraySplit.join('-');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

// since it is case sensitive i must create variables with the arguments 'string' & 'Char' in same case

var lowerCaseString = string.toLowerCase();
var lowerCaseChar = char.toLowerCase();

// create a way to compare the first letter of the "string" to the "char" character

    var arrayString = lowerCaseString.split(''); // creates an array index of the string
    
 // create a way to test if the first letter of "string" matches "char"
 
 
    for (var i = 0; i < arrayString.length; i++) {   // create a for loop to access the first letter of the array
        if (arrayString[i] === lowerCaseChar) { // if statement the first index in arrayString is = to the character
            return true;
            
            // returns a true value
        } 
    };
return false 

// for everything else is false

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //


// since it is case sensitive i must create variables with the arguments 'string' & 'Char' in same case


var upperCaseString = string.toUpperCase();
var upperCaseChar = char.toUpperCase();

// create a way to compare the first letter of the "string" to the "char" character

var stringArray = upperCaseString.split('');

 // create a way to test if the first letter of "string" matches "char"
 
 
for (var i = 0; i < stringArray.length; i++) {  // create a for loop to access the first letter of the array
    
    if (stringArray[i] === upperCaseChar) {  // creates an array index of the string
        
        return true;
    }
}
return false
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// use the + function to concat the arguments of stringOne and stringTwo

return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // create the variable args. use Array.from function to turn all arguments in stringOne and strinTwo
    
    var args = Array.from(arguments);
    
// bring all string together from variable args with the .join funtion
    
   return args.join('');
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// create an if function to comare lengths of stringOne and stringTwo by using .length funcction 

if (stringOne.length > stringTwo.length){
    
    // if the lenght is greater than the other
    
    return stringOne;
    
    // create an if function to comare lengths of stringOne and stringTwo by using .length funcction 

    
} else if (stringTwo.length > stringOne.length) {
    
      // if the lenght is greater than the other
    
    return stringTwo;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // use the .localeCompare function to distingiush between stringOne and StringTwo

return stringTwo.localeCompare(stringOne);


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //


 // use the .localeCompare function to distingiush between stringOne and StringTwo

return stringOne.localeCompare(stringTwo);


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
