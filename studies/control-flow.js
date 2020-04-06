/* Use the if statement to execute a statement if a logical condition is true.
Use the optional else clause to execute a statement if the condition is false.
*/

var x = 1

if (x === x) {
  console.log(true)
} else {
 console.log(false)
}
// else if is an if statement if you have multiple conditions

var y = 2

if (x === y) {
    console.log('not real')
} else if (x === x) {
    console.log(true)
} else {
    console.log('wow')
}

/* The switch statement evaluates an expression, 
matching the expression's value to a case clause, 
and executes statements associated with that case.
*/

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
