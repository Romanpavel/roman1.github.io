////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// parameters of start, end, and a step conditional returning 1 or -1

function range(start, end, step = start < end ? 1 : -1) {
  
  // I : 3 numbers a start and an end and a step
  // array of all numbers between start and end "stepped" between them
  
  // create array to hold values 
  let array = [];

// if the 2 conditions are the same return an empty array
  if (start === end) {
    return [];
  }

// if there is a value of step
  if (step > 0) {
    
    // for loop with start as starting condition and end as stopping
    
    // incremenenter add i to step, push index i into array
    
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  // I : an array of numbers
  // O : a number of the sum of the numbers in the array
  
  // variable starting at 0
  let total = 0;
  
  // loop through array
  for (let value of array) {
    
    // add value element to total with every iteration
    // summing up all the element numbers in the array
    total += value;
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  // I : an array
  // O : the array in reverse order
  
  // create an array to pass in values
  let output = [];
  
  // start at the end of the array and loop backwards
  // decriment at every iteration
  for (let i = array.length - 1; i >= 0; i--) {
    
    // push value at index i into the output array
    // add the last index to the new output array, then add the rest subsequently
    // resulting in the elements being added in reverse
    output.push(array[i]);
  }
  
  // return the reversed array
  
  return output;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  // I : an array
  // O : the array in reverse order
  
  // for loop
  // start at 0
  // stopping condition is the middle of the array
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    
    // asign variable old to ith index of array
    let old = array[i];
    
    // asign the last index subtracted by index i to equal the index of i at array
    array[i] = array[array.length - 1 - i];
    
    // re-asign 
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
  // I : an array
  // O: an object
  
  // variable for null, for future object 
  let list = null;
  
  // for loop backwards over array
  for (let i = array.length - 1; i >= 0; i--) {
    
    // re-asign list to object of index i at array and list
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  // I : an object
  // O : an array
  
  // create array
  let array = [];
  
  // start at list, end at x, increment by re-asign value at rest to x
  for (let x = list; x; x = x.rest) {
    
    // add the value to array 
    array.push(x.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  
 // I : a value and an object
 // O : adds the value elemtn to the front of the object
  
  // return an object of the value input and the rest of the list
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  
  // I : an number and an object
  // O : the element at the position of the list
  
  // if list doesnt exist, or if there is no list
  if (!list) {
  return undefined;
  
  // if n is equal to 0 return the value of the list
  // base case
 } else if (n == 0)
  return list.value;
  
  
  // using recursion, return the function at the rest property and n - 1 for 
  // the other parameter
 
  else {
  return nth(list.rest, n - 1)
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  
  // I : 2 values
  // O : boolean if the rqual each other
  
  
  // base case a strictly equal to b
  if (a === b) {
    return true;
  }
  // if a or b euals null or not an object
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        
       return false;
}

// return all the values into an array in string form
  let keysA = Object.keys(a) 
  let keysB = Object.keys(b);


// if the keys are not the same amount
  if (keysA.length != keysB.length) {
    return false;
}

// loop over the created array of keysA
  for (let key of keysA) {
    
    // if array keysB does not include specific key
    // or using recursion if the values are not there return false
   
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
  }
}
// anything else return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
