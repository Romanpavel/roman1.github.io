// variables are place holders for any dataType, they are a way for us to name things

// variables can be expressed with 3 different special words: var, let, const

// to declare a variable we simply use 1 of the 3 key words followed by any name

var myVariable;
let anotherVariable;
// const neverChangeVariable

// the way to asign a variable is through the (=) operator 

myVariable = 'Im a string';
anotherVariable = 3;

// you can shorten this step on a single line

var myVariable = 'Im another string';

// var keyword is usually used in global scope

var globalVariable = 42;

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

// meaning that the variable becomes accesible from anywhere in the goof

function putTogether (x) {
    return console.log('I am ' + x);  // returns 'i am superman' x is hoisted
}

putTogether('superman');