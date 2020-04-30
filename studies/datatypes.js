/* 
 *
 * DATATYPES:
 *
 * 0. DataTypes can store value, different dataTypes store different kinds of values
 *    there are simple dataTypes like Numbers, Strings, Booleans
 *
 * 1. there are also complex dataTypes like arrays, objects, and functions,
 *    complex dataTypes can store other dataTypes inside of them
 *
 * 2. javascript is a language based around objects and functions.
 *    technically a function and an array are considered objects.
 *
 * 3. numbers store integers from -infintity to infinity  
 *
 * 4. strings are enclosed in "" and can be anything 
 *
 * 5. booleans are true/ false statements.
 *
 * 6. arrays are represents by [] and can store any other data type in it
 *
 * 7. objects are represented by {} and datatypes are stored in key/value pairs
 *
 * 8. function take a 'function' keyword or => 
 *
 * 9. they can hold a parameter and return a value after passing in other dataTypes
*/




// 1. Number are any numeric value, or integer
var i = 1
var n = -1   // negative numbers have a (-) in front
var bigNumber = 5.9742e+24; // the mass of the earth
var decimal = 3.14 // pi... irrational numbers that go on for infinity

// 2. strings are any thing you want to write in between quotes ("") or ('')

var string1 = 'Im a string'; 
// strings are indexed like arrays where the first character is element 0

// you can aceess elements or characters of a string in 2 different ways

//- split the string with string1.split(''), seperating every character into an array
                 // access with bracket notation console.log(string1[0]) => I
                 
// or the shorcut charAt()... string1.charAt(0) => I

// 3. Booleans are true false expressions, 

var c = true; 

// or

var c = false; 

// 4. Arrays are objects, and can store many different datatypes, simple & complex
// simple dataTypes are numbers, strings, booleans
// complex dataTypes are other arrays and objects

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
console.log(myObject['key1']) // also works => 1 

// keys can be named anything and are also considered strings

// 6. a funtion is a function object designed to return a value 

// to declare a function, use the (function) keyword followed by the name of function then (parameter)

function myFunction(someParameter) {
    console.log('hello')      // statement 
    }

// call a function by its name and value in (parameter)

myFunction();

// 7. undefined is a value automatically assigned to variables that have just been declared,

var newValue

console.log(newValue)  // results in "undefined" because newValue has been delcared
                       // But, not initilized, therefore has no value

// 8. null is a special primitive dataTyoe that is made intentially to serve as
// the absense of value, it is often placed intentially 


var nada = null  // different from 0 or undefined null represents intentianal 
                // absense of value

console.log(null)  // prints null to the screen, asigned to nada

// 9. NaN represents Not-a-Number, its a porperty that evaluates a value 
// if the value is not a legal number you'll recieve a NaN

var number = 'two'             // string of a number

var otherNumber = 'five'       // another string 

var multiply = number * otherNumber

console.log(multiply);    // returns NaN because you cannot use arithmetic on strings

// NaN is designed to return when the code is performing mathematical functions
// on dataTypes that are not numbers.



// 10. inifinity and -infinity are numeric values represeting infininty and negative infinity 

var infinity = console.log(1.797693134862315E+308) // this is the limit of the floating point number

// infinty is displayed when number exceeds the code capacity of numbers

var negativeInfintity = console.log(-1.797693134862315E+308) // this is the negative limit

/* 11. Primitive data is data that is not an object and has no methods. 
There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. 
*/

// 12. Complex data types have methods and store multiple values like objects

// you can have complex dataTypes like Arrays, which can store other arrays and objects
// also objects can hold other arrays in their values along with other objects and simple datatypes

/* 13. there are 5 data types that are passed by value: 
(Boolean, null, undefined, String, and Number.)

passed by value means creating a copy of the original, to use later

           `~ you can pass these values through the 5 dataTypes
            ~ using the asignment operator (=) these values are "copied"
            
*/
            var myNumber = 11;
            var newNumber = myNumber;
            myNumber = 2;
            
            console.log(newNumber);   // prints 11 to the screen
            console.log(myNumber);    // prints 2 to the screen
            
            // the variable newNumber copied myNumber => (11) 
            // myNumber is re-asigned to 2

/*

Javascript has 3 data types that are passed by reference:
Array, Function, and Object. These are all technically Objects

passed by reference means creating a Psuedonym or Alias to the original

            - when we reference complex dataTypes they come from a collection 
            - theyre accessed through either dot(.) or bracket notation ([])
            - 

*/

var myObj = {
    name: 'roman',
    age: 29,
    human: "maybe"
};
myObj.human = true;

console.log(myObj)   // prints {name: 'roman', age: 29, human: true}