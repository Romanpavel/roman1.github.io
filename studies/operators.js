// 1. the assignment operator is the = 

var any = 5 // vavariable of any is assigned the value of 5

any = 10 // you can change the variable and use the assignment operator to alter

/* 2. arithmatic operators are (addition) +,(subtrcation) -
(division) /, (multiplication) *

*/

2 + 2
2 - 1
2 / 2
2 * 2

// 3. comparison operators compare different value sets

2 == '2' // equalty 
2 === 2 // strict/ exact eqaulity
1 != '2' // not equal
1 !== 2 // strictly not equal
1 < 2 // less than
1 <= 2 // less then or equal to
2 > 1 // greater than
2 >= 1 // greater than or equal 

/* When type conversion is involved in the comparison 
(i.e., non–strict comparison), 
JavaScript converts the types String, Number, Boolean, or Object operands:

When comparing a number and a string, the string is converted to a number value.
JavaScript attempts to convert the string numeric literal to a Number type value. 
First, a mathematical value is derived from the string numeric literal. 
Next, this value is rounded to nearest Number type value.
If one of the operands is Boolean, the Boolean operand is converted to 1 if it is true and +0 if it is false.
If an object is compared with a number or string, 
JavaScript attempts to return the default value for the object. 
*/

// 4. Logical Operators compare values using AND, OR, NOT

const a = 3;
const b = -2;

console.log(a > 0 && b > 0); // and operator 
// expected output: false

console.log(a > 0 || b > 0); // or operator 
// expected output: true

console.log(!(a > 0 || b > 0));
// expected output: false

var not = !true // returns false 

// 5. Unary Operator is an operator with only one operation 

//    a. delete operator deletes variables implicity but not if theyve been decalred with var

// x = 42;
// var y = 43;

// delete x;       // returns true (can delete if declared implicitly)
// delete y;       // returns false (cannot delete if declared with var)

//    b. typeof operator returns a string of the type of datatype

var myType = {}
console.log(typeof myType) // prints to the screen 'object

// var myFun = new Function('5 + 2');
// var shape = 'round';
// var size = 1;
// var foo = ['Apple', 'Mango', 'Orange'];
// var today = new Date();

// typeof myFun;       // returns "function"
// typeof shape;       // returns "string"
// typeof size;        // returns "number"
// typeof foo;         // returns "object"
// typeof today;       // returns "object"
// typeof doesntExist; // returns "undefined"

// For the keywords true and null, the typeof operator returns the following results:

// typeof true; // returns "boolean"
// typeof null; // returns "object"

//     c. The void operator specifies an expression to be evaluated without returning a value

/* You can use the void operator to specify an expression as a hypertext link. 
The expression is evaluated but is not loaded in place of the current document.
*/

// <a href="javascript:void(0)">Click here to do nothing</a>

// The following code creates a hypertext link that submits a form when the user clicks it.

// <a href="javascript:void(document.form.submit())">
// Click here to submit</a>

/* 6. The ternary operator takes three operands: 
a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:),
and finally the expression to execute if the condition is falsy.
This operator is frequently used as a shortcut for the if statement.
*/

// syntax: condition ? exprIfTrue : exprIfFalse

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"