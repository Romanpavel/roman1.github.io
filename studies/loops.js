/* loops are ways in programming to itterate through complex dataTypes and 
   check for a condition if a condition is met you can run code repeatedly 
   through the code block
   
   *** you can loop through an array with a for loop 
   *** you can loop through objects with a for... in loop
   *** there are also while and do...while loops
   
   we want to be able to iterate are 'loop' over a data set checking for conditions
   if data sets are increidbly large loops help us deal, compress, and pick out values
*/



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

var j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var e = 0; e <= j.length; e++) { // loop over array forward, start at the first index [0]
                                      // stop at last index using the .length method
  console.log(j[e])                // prints numbers 0 - 10
}

// counting backwards would swtich the starting/ stopping conditions

var k = [1, 2, 3]

for (var a = k.length - 1; a >= 0; a--) { // loop over array backwards
                           // start at the last index of k by using .length - 1
                           // since .length counts elements, but they are indexed
                           // starting at 0, you have to subtract 1
                                    
  console.log(k[a])                     // prints 3, 2, 1
                        // access k at every iteration of a
}

// in order to loop over an object, must use for.. in loop