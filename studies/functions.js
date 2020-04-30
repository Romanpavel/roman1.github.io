/*
 *
 *   FUNCTIONS:
 *
 *  0. functions are a special type of objects.
 *    
 *  1. functions take a paramater as a placeholder for future arguments
 *
 *  2. functions are created with the 'function' keyword or => an arrow
 *
 *  3. dataTypes can be passed into functions to return other dataTypes and values
 *
 *  4. functions are considered 1st class functions, they have properties and methods
 *     but can be invoked by "calling" it through the functions name, and 
 *     passing in an argument
 *
 *  5. functions are composed a sequence of statements called the function body
 *
 *  6. functions need return statements to indicate the value to return
 *      if no return statement is given the function will return the default value
 */









/* 1. the way you invoke a function is by calling it by the function name,
followed by parantheses ()
*/
function name () {
    return console.log();  // functions end at return statements 
}

// the way to use the function is by passing in a value into the paranthese

name('string') // passes in a string 


/* 2.  function parameters are placeholders in the function.
usually inside the parantheses
when we call a function and pass in arguments, these are actual values
*/

function name2 (parameter) {
    return console.log(parameter);
}
name2(11) // 11 would be the argument passed into the function name2

// 3. named function sytax:
function name3 (parameter) { // keyword function, name of function, parameter
     return console.log() // return statement 
}

// 4. you can assign a fucntion to a variable with the assignment operator 

var name4 = function () {
    return console.log();
}

// 5. INputs are parameters and returns give the single value

function name5(parameter) {
  return // single value
}


// 6. Local vs. global scope

/* local scope: or function scope are variables that are only referenced
inside the code block
*/

function x() {
  var y = "string1";

  console.log(y) // has reference to to 'string1'

}

// global scope: varibales that are available throughout the ENTIRE code


var y = "string2";

console.log(y) // will print 'string2' because it is globally scoped

// 7. closures give you access to outer functions from inside the function.

// meaing you can use arguments passed in the outer function and call it
// from the inside of the function returning a value from several methods

function addingUp () {
    let first = 0       // local variable in the addingUp function
    function addIt () { // nested function to increment by 1
        first += 1      // example of closure using parent variable 
        return first
    }
    return addIt
}
 
var plusOne = addingUp();

var another1 = plusOne()  // returns 1
var another2 = plusOne()  // return 2
console.log(another2);    // prints 2 to the screen