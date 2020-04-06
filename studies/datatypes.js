// 1. Number are any numeric value
var i = [1, 5, 11, 19, 20];

// 2. strings are arrays which are represented and made by using quotes ''

var b = 'Im a string'; // strings are indexed like arrays where the first character is element 0

// 3. Booleans are true false expressions, 

var c = true; 

// or

var c = false; 

/* 4. Arrays are variables 
they can store a range of values like strings and numbers, 
it stores different different variables in indexes or elements 
we can access individual variables from a range of elements
*/

var myArray = []; // arrays are created by using [] brackets

myArray = [1, 'string', true,]; // elements in an array are represented by index [0, 1, 2]

console.log(myArray[1]) // prints 'string' to the screen because its in the [1] index

// 5. objects are datatype pairings 
/* defined as an unordered collection of related data,
in the form of “key: value” pairs. 
These keys can be variables or functions.
*/
// objects are defined by curly brackets {}

var myObject = {}

// objects are aranged in key/value pairs

myObject = {
    key1: 1,
    key2: 'string'
}
// key value pairs are seperated by a colon :

console.log(myObject.key1) // using dot notation we can access the value of Key1 which prints 1 to the screen

// keys can be named anything 

// 6. a funtion is a function object designed to return a value 

// to declare a function, use the (function) keyword followed by the name of function then (parameter)

function myFunction(someParameter) {
    console.log('hello')      // statement 
    }

// call a function by its name and value in (parameter)

myFunction();

// 7. undefined is a value automatically assigned to variables that have just been declared,

var notDefined 

console.log(notDefined)  // would print 'undefined' to the screen

// 8. null is a special value that represents the intentional absence of an objet value

// its designed to falsefy a boolean

var nada = null

console.log(null)

// 9. NaN represents Not-a-Number

function expose(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(expose('1'));
// expected output: "1"

console.log(expose('NotANumber'));
// expected output: NaN

// 9. inifinity and -infinity are numeric values represeting infininty and negative infinity 

/* 10. Primitive data is data that is not an object and has no methods. 
There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. 
*/

// 11. Complex data types have methods and store multiple values like objects

/* 12.Javascript has 5 data types that are passed by value: 
Boolean, null, undefined, String, and Number.

you can pass primitive values through the 5 dataTypes
using the asignment of = these values are "copied"

Javascript has 3 data types that are passed by reference:
Array, Function, and Object. These are all technically Objects

when we reference complex dataTypes they come from a collection 
theyre accessed through either dot or bracket notation

*/