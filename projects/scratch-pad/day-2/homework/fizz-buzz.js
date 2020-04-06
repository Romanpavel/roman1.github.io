// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

//create variable and make it equal to 1

var nums = 1;

for (nums = 1; nums < 101; nums++) { // for loop to start count at 1 and end below 101 at 100

// create if statement to see variable nums divisible by 3 using the && comparative, also 5
 
 if ((0 == nums % 3) && (0 == nums % 5)){
           console.log("FizzBuzz"); 
//otherwise, if the number is divisible by 5 print Buzz
         } else if (0 == nums % 5) {
          console.log("Buzz");
//Also, if the number is divisible by 3 print Fizz
         } else if (0 == nums % 3){
           console.log("Fizz");
         } else {
//meanwhile, still print all the numbers that don't satisfy the conditions above
           console.log(nums);
}
}
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}