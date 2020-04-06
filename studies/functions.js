/* 1. the way you invoke a function is by calling it by the function name,
followed by parantheses ()
*/
function name () {
    return console.log();
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

var myFunction = function name4 () {
    return console.log();
}

// 5. INputs are parameters anf returns give the single value

function name5(parameter) {
  return // single value
}


// 6. Local vs. global scope

/* Each function creates a new scope.
Scope determines the accessibility of these variables.
Variables defined inside a function are not accessible from outside the function

Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have Function scope: They can only be accessed from within the function
*/

// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}

/* A variable declared outside a function, becomes GLOBAL.
A global variable has global scope: All scripts and functions on a web page can access it.
*/

var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}

// 7. closures are referencing global scoped variables inside your local scope


function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

