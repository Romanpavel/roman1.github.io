
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  
  // I : a number
  // O : a triangle of '#' strings based on the number input
  
  // for loop of the array, add # at every iteration
  // start condtion at a string '#'
  // stopping condition is the number being passed in.
  // if number is 0 there are no triangles, if 1 there is 1 triangle
  // at every iteration of the for loop using += the string "#" gets added
  
for (let triangle = "#"; triangle.length <= number; triangle += "#")

// print the triangle 
// since its a for loop, trinagle "#" gets printed at every iteration
// with number 3, 1 "#" will print on the first iteration then "##" on the second
// then "###" on the 3rd and so on... n

  console.log(triangle);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  // I : 2 numbers
  // O : a print out of all number between start and end, replace numbers divided by 3
  //      with string of 'fizz', numbers divisible by 5 ' buzz'. and both with 'fizzbuzz'
  
  // for loop, start with (start) number, end at (end) number, increment by 1
  for (let x = start; x <= end; x++) {
    
    // if divisible by 5 and 3 with remander of 0
    // using the % modulo 
    if (x % 5 == 0 && x % 3 == 0) {
    console.log('fizzbuzz');
    
    // divisible by 3 w/ remainder of 0
  }else if (x % 3 == 0) {
     console.log('fizz');
     
     // divisible by 5 w/ remainder of 0
  }else if (x % 5 == 0) {
    console.log('buzz');
    
    // print number x if not divisible by 5, 3, or both
  } else {console.log(x);}
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {

// I : a number
// O: series of '#' strings that make up a chessboard with # and " " spaces

// make number equal to variable size for simplicity 
let size = number;


// variable to hold the output, printing # as a string
let board = "";


// for loop over given array
for (let y = 0; y < size; y++) {
  
  // for loop for negative space
  for (let x = 0; x < size; x++) {
    
    // if the combination of both spaces divided by 2 has a remainder of 0
    if ((x + y) % 2 == 0) {
      
      // add a space
      // start with a space
      board += " ";
    } else {
      
      //  a hashtag at all characters between the spaces
      board += "#";
    }
  }
  board += "\n"; // add new line, per given number
}

// print the string of board to the screen

console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
