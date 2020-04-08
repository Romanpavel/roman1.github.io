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

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// var is short for variable and used in functional scope

Input:
console.log(x);
var x=5;
console.log(x);
Output:
undefined
5

// let is also a way to assign value similar to var

Input:
// console.log(y);
var y = 5;
console.log(y);
Output:
Error

// const is a variable that can not be changed, called a contstant 

const RATE = 0.1;
//RATE = 0.2; // TypeError when trying to reasign a const

/* undeclared variables are global variables, to hoist is to make it universally accessible
bringing the varaible to the top of the scope


JavaScript only hoists declarations, not initializations. 
If a variable is declared and initialized after using it, 
the value will be undefined.
*/

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // declaration
num = 6; // initialization