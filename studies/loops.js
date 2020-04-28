// loops are ways in programming to itterate through complex dataTypes and check for a condition
// if a condition is met you can run code repeatedly through the code block




/* 1. a) while loop executes a block of code while the condition in the paratheses
evaluate to be true
*/

let n = 10;   // assign n to 0 integer

while (n > 1) {  // while n is greater than 1, execute code below
  n--;           // decrement by 1 as long as n is greater than 1
}

console.log(n); // returns 1 because thats the last number not greater than 1


/* b) For loops allow you to loop through an array and access every element
there are 3 main things in a for loop, the starting condition, the stopping 
condition and the incrementor
*/

var myArray = [1, 2, 3, 4, 5]
for (var i = 0; i < myArray.length; i++) { // start at 0 index, stop at end of index, increment by 1
  console.log(myArray[i] * 2) // prints an array [2, 4, 6, 8, 10], 
  // multiplies every element in array by 2
}


// c) The for...in loop loops over an object and access every key in the object

var myObj = {
  key1: 'value1',
  key2: 2,
  key3: true
}
for (var key in myObj) {
  console.log(myObj.key1 = 1) // changes all keys to have value of 1
}


// you can loop over an array or object as many times as you want

var j = []

for (var j = 0; j < 100; j++) { // loop over array forward, start at 0, stop before 100
  console.log(j)                // prints numbers 0 - 99
}

// counting backwards would swtich the starting/ stopping conditions

var k = [1, 2, 3]

for (var a = k.length; a > 0; a--) { // loop over array backwards
                                    // start at end of k, stop at above 0
  console.log(a)                     // prints 3, 2, 1
}

// in order to loop over an object, must use for.. in loop