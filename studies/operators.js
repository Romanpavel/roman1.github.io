
/* 
operators are a short way for us to organize and manipulate dataTypes
there are several types of operators 

we can asign variables to values or other variables through assignment
there are also operators wich manipulate numbers and get values through arithmatic
we can also use operators to figure out what type of values we have. 
operators are used on variables and values

*/


// 1. the assignment operator is the = 

var any = 5 // vavariable of any is assigned the value of 5

any = 10 // you can change the variable and use the assignment operator to alter

var y = 10
var y1 = 2


y += y1; // y = y + y1 = 12

y -= y1 // y = y - y1 = 8

y *= y1 // y = y * y1 = 20

y /= y1  // y = y / y1 = 5



// a strict comparison === takes 3 equals signs and compares if 2 things are
// Exactly the same 

1 === 1;
true === true;
'string' === 'string';

// a loose comparison == is represented by 2 equals signs and converts dataTypes to common types

1 == '1';


/* 2. arithmatic operators are 
adding (+), and subtrcating (-)
dividing (/), and multiplying (*)
*/

2 + 2 // equals 4
2 - 1  // equals 1
2 / 2 // equals 1
2 * 2 // equals 4

// 3. comparison operators compare different value sets

2 == '2' // equalty 
2 === 2 // strict/ exact eqaulity
1 != '2' // not equal
1 !== 2 // strictly not equal
1 < 2 // less than
1 <= 2 // less then or equal to
2 > 1 // greater than
2 >= 1 // greater than or equal 


// 4. Logical Operators compare values using AND, OR, NOT

var negativeNumber = -3
var bigNumber = 100;

console.log(negativeNumber > 0 && bigNumber > 0); // and operator 
// only one condition is true, so result is false, because and requires both
// to be true

console.log(negativeNumber > 0 || bigNumber > 0); // or operator 
// since the or only requires either to be true, bigNumber is bigger than 0
// this will return to true


console.log(!(negativeNumber > 0 || bigNumber > 0)) // not operator expressed through bam(!), gives oppossite
// if either are true, return the opposite which is false

var not = !true // returns false 

// 5. Unary Operator is an operator with only one operation 

    // A. the delete operator deletes something that you want
    
    var anObj = {
        key1: 'string',
        key2: 5
    }
delete anObj.key2  // deletes the second key and 5

var anArray = ['a', 'b', 'c', 'd'];
delete anArray[0] // deletes 'a'

     // B. the typeof operator returns the type of data type in a string

var myBool = false
var myNumber = 1
var myString = 'string'
var myFunc = function () {}
var myobj = {}

typeof(myBool) // returns "boolean"
typeof(myNumber) // returns 'number'
typeof(myString) // returns 'string'
typeof(myFunc())  // returns 'function'
typeof(myObj) // returns 'object'

        // C. the incrementor operator (++) adds 1 to its operand
        
        var start = 0
        start ++
        console.log(start) // prints 1 to the screen
        
        // D. the decrimentor operator (--) subtracts 1 from its operand
        
        var end = 100
        end --
        console.log(end) // prints 99 to the screen

/* 6. ternary operators use 3 different operands, usually as a replacemtn of If
statement, broken up by a (?) and a (:)
*/ 
// syntax (condition) ? (if true) : (if false)

var age = 100;
var retirement = (age > 65) ? 'retire' : 'keep working';
console.log(retirement); // prints 'retire' to the screen

// the ternary operator can be chained together in the same way if/else if/else