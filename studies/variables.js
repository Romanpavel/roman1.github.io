/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */


var myVariable;
let anotherVariable;
// const neverChangeVariable

// the way to asign a variable is through the (=) operator 

myVariable = 'Im a string';
anotherVariable = 3;

// you can shorten this step on a single line

var myVariable = 'Im another string';  // this is called initializing the variable

// var keyword is usually used in global scope

var globalVariable = 42;             // Initialized variable

// let is usually used a placeholder for a local scope, or inside loops

function hey (x) {
    let y = '!!!'
    return 'Hey! OK!' + y; // returns "Hey! OK!!!!"
}

// const is a variable that cannot be changed

// const neverChange = 'dont change me bro'

// neverchange = 5    => would be an error

// const is useful when you need to make sure a value stays the same



// Hoisting is a way to take variable declaration and move it to the top of the scope

// variables declared with (var) can be globally accessed and are hoisted to the top

// variables declared with (let) and (const) are not hoisted and only initialized 
// when the code reaches the block where let and const are
// accessing variables declared with let or const before theyre declared => reference error
// let and const variables are in the "temporal dead zone" until their scope is entered

// meaning that the variable becomes accesible from anywhere in the goof

function putTogether (x) {
    return console.log('I am ' + x);  // returns 'i am superman' x is hoisted
}

putTogether('superman');