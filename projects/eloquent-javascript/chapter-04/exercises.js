////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// parameters of start, end, and a step conditional returning 1 or -1

function range(start, end, step = start < end ? 1 : -1) {
  
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
    
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  // variable starting at 0
  let total = 0;
  
  // loop through array
  for (let value of array) {
    
    // add value property to total with every iteration
    total += value;
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  // create an array to pass in values
  let output = [];
  
  // start at the end of the array and count backwards
  for (let i = array.length - 1; i >= 0; i--) {
    
    // push value at index i into the output array
    output.push(array[i]);
  }
  return output;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  // for loop, stopping condition the middle of the array,
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    
    // variable for i index of array
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
  
  // variable for null
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
  
  // create array
  let array = [];
  
  // start at list, end at node, increment by re-asign value at rest to node
  for (let node = list; node; node = node.rest) {
    
    // add the value to array 
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  
  // return an object of the value input and the rest of the list
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  
  // if its not a list
  if (!list) 
  return undefined;
  
  // if n is equal to 0 return the value of list
  else if (n == 0)
  return list.value;
  
  // return the function at value rest, and integer n - 1
  else 
  return nth(list.rest, n - 1)
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  // if a or b euals null or not an object
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
        
       return false;
}

// access the keys of the object
  let keysA = Object.keys(a) 
  let keysB = Object.keys(b);


// if the keys are not the same amount
  if (keysA.length != keysB.length) {
    return false;
}

// loop over the created array of keysA
  for (let key of keysA) {
    
    /* if array keysB does not include specific key
    or the function of deepEqual does not have a value at a and b key 
    */
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
