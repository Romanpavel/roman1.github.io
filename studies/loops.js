/* 1. a) The while statement creates a loop that executes a specified statement 
as long as the test condition evaluates to true. 
The condition is evaluated before executing the statement.
*/

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

/* b) The for statement creates a loop that consists of three optional expressions, 
enclosed in parentheses and separated by semicolons, 
followed by a statement (usually a block statement) to be executed in the loop.
*/
let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"


/* c) The for...in statement iterates over all enumerable properties of an object 
that are keyed by strings.
*/

const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

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