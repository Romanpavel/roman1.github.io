// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {

var t = function (acc, curVal){
  return acc.concat(curVal);
};

return arrays.reduce(t);
}



// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  
  // starting condition equate x to value
  // stopping condition pass in x to test
  // inrement by reasign x to x of update
  for (let x = value; test(x); x = update(x)) {
    
    // access each value index of body
    body(x);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {
  
  // loop over array 
  for (let element of array) {
    
    // if element of preidcate is not present return false
    if (!predicate(element)) {
     return false;
    }
  }
  return true;
}
// crerate another function 
function every2(array, predicate) {
  

  // creat function inside returns the opposite of the value element in predicate parameter
  var t = function (element) {
    return !predicate(element);
  }
  
  return !array.some(t);
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  // function of counted, to take another function. parameter text and char
  let counted = countBy(text, char => {
    
    // equate script to index at 0 of char 
    let script = characterScript(char.codePointAt(0));
    
    // return conditional statemant of script.direction or string none
    return script ? script.direction : "none";
    
    // filter out name, name does not equate to string 'none'
  }).filter(({name}) => name != "none");

// if result of counted array is 0

  if (counted.length == 0) {
  return "ltr";
}


  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
