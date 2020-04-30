/* 
 *
 * CONTROL FLOW:
 *
 *
 * 0. control flow is a way to steer your code towards a desired outcome.
 *    computers operate on an on/off basic thought process.
 *    knowing these principles we can steer code based on this fundemental principle.
 *
 * 1. if a exists => do this, if not => do this instead
 *    we can have several conditional statements that represent binary decisions
 *
 * 2. as the we move through the code conditional statements guide our code to a 
 *    desired destination through a series of binary decsions.
 *
 *
*/

// knowing this we can control the flow of our code through a series of 
// If/ Else If/ Else 
var x = 2;
if (x > 1) {         // if a parameter turns out to be true run code block
  console.log('');   // any code block, that you want to run 
}

// when comparing multiple conditions, you can use a chain of If statements with
// else if

var a = 5;
var b = 10;

// first condition
if (a > b) {                    // false
  console.log('A is bigger');    //  does not prints to screen
  
  // second condition
} else if (b === a) {             // false 
  console.log( 'they are equal'); // does not prints to screen
  
  // the nth conditon
  // can go on an as long as their are further conditions to be met 
  
} else if (b > a) {           // code stops here, evaluates to true, 
  console.log('B is bigger');  // prints to the screen
  
  
  //  ********* Syntax *************
  
  // if (condition) {         // a sigular if statement 
   // statement
 // }
 
 //  if (condition1) {      // if condtion1 is false, a single else statement returns
   // statement1
// } else {
  // statement2
//}
  
  
  // if (condition1) {       // nested if statemennt
    // if (conditionN) {      // as many if as needed
      // statement
    // }
  // }
  
  
  // if (condition1) {            // endless chain of if/else if statements
    // statement1
  // } else if (condition2) {
    // statement2
    // .
    // .
    // .
  // } else if (conditionN) {
    // statementN
  // }
  
  
  
  
  // computer does not go any further becuase the above if was true
  
  // even if any if statements are true below, code will stop at 1st true statement

  
  // But, if all other tests were false, and if all coditions are false
  // you can end with an else statement that will execute code, if all else is False
  
} else {
  console.log('I dont know');
}

// Another way to maniplulate the on/off nature of conditional statements is -

switch(x) {             // x is any expression that has a strict equal operator

  case 'string1':                 // evaluates if x is equal to sting "string1"
  
   console.log('found a string');      // executes code block
   
  break;            // if case is true, stops code, switches x 
  
  case 1:          // if x === 1
  
  console.log('found a number');    // prints to screen if above is true
  
  break;
  
  case true:
  case false:
    console.log('this is a boolean');  
    // can asign one code block to more than 1 case
    
  break;
  
  default: // similiar to else statement, if case can not be found
      console.log('I found nothing')
}

// the switch method evaluates the expression and tries to match it to the case
// the code will stop after the 1st (===) strictyl equal case
// the expression switches with the code block in the evaluated case

// switch statements can be more effieictn when dealing with data values
// allows to copare multiple expressions reducing redundancies 


// **** syntax ******

// switch (expression) {     // switch keyword, followed by expression in ()
  
  // case value1:            // keyword case followed by a value
  
    // statement1            // runs when expression matches the value1
  
  // break;                 // keyword break to stop switch expression
  
  // ...
  
  // case valueN:           // cases can continue infinitely 
  
    // statementN
    
  // break;
  
  // default:
  
    // statement            // runs if no cases match the expression
    
  // break;
  
// }