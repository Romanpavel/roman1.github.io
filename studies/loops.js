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

for (var i = 0; i < 100; i++) { // loop over array forward
  console.log(i)
}

// counting backwards would swtich the starting/ stopping conditions

var k = []

for (var a = k.length; a > 0; a--) { // loop over array backwards
  console.log(a)
}

// in order to loop over an object, must use for.. in loop