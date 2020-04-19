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