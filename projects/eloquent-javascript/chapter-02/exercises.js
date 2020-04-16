
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  
  // for loop of the array, add # at every iteration
  
for (let triangle = "#"; triangle.length <= number; triangle += "#")

// print the triangle 

  console.log(triangle);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  // for loop 
  for (let x = start; x <= end; x++) {
    
    // if divisible by 5 and 3 with remander of 0
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
      board += " ";
    } else {
      
      // if not a hashtag
      board += "#";
    }
  }
  board += "\n"; // add new line
}

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
