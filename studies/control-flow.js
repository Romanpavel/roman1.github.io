// control flow is a way to steer your code towards a desired outcome.
// computers operate on an on/off basic thought process


// knowing this we can control the flow of our code through a series of 
// If/ Else If/ Else 

if (true) {         // if a parameter turns out to be true run code block
  console.log('')   // amy code block, that you want to run 
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
