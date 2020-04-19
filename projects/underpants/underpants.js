// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// type out an object {typeof: function (value)} 

_.typeOf = function(value) {
    
    // if statement to test if value is an array
    // Array.isArray method returns a boolean, 
    
    if (Array.isArray(value) == true) {
        
        // if true return the string 'array'
        
        return 'array';
        
        // else if the value is null return null
        
    } else if (value === null) {
        return 'null';
        
        // now that we have taken care of the special circumstance of null and array
        // all other datatypes will print a string matching the data type
        
    } else {
        return typeof(value);
    }
    
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number) {
    
    // creat an array to hold output
    var myArray = [];
    
    // check if array is not an array and return an empty array
    if(!Array.isArray(array)) {
        return [];
        
        // check if number paramter is undefined or Not a Number
        //.isNan returns boolean if parameter is Not a Number
    } else if(number == undefined || number.isNaN == true) {
        
        // return the first index of the array
        return array[0];
        
        // if the number parameter is larger than the element amount of array
    } else if (number > array.length) {
        
        // return the array
        return array;
    } else {
        for(var i = 0; i < number; i++) {
            myArray.push(array[i]);
        }
    }
    return myArray;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(array, number) {
    
    // create an array to hold the outcomes
    let myArray = [];
    
    // test if array is not an array or if parameter of number is less than 0
    
    if (!Array.isArray(array) || number < 0) {
        
        // return an array literal
        return [];
        
        // test if 'number' is undefined or Not a Number
        // using the .isNaN method and the or || operator 
    } else if (number == undefined || number.isNaN == true) {
        
        // return the last element of the array using .length - 1
        return array[array.length - 1];
        
        // if the number is greater than the elements of the array return the array
    } else if (number > array.length) {
        return array;
        
        // finally loop over array backwards 
        // starting at the last index [array.length -1]
    } else {
        for (let i = array.length - 1; i > 0; i--) {
            
            // .unshift adds the ith element of array to the front of myArray
            myArray.unshift(array[i]);
        }
    }
    
    // return the array
    return myArray;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    
   // for loop over the array, 
    
    for (let i = 0; i < array.length; i++) {
        
        // if the value parameter mathces the ith key of array
        
        if (value == array[i]) {
            
            // return the value
            return i;
        } 
        }
        
        // otherwise if key {value} is not in the array of objects return -1
        return -1;
    }



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (array, value) {
  
 return array.indexOf(value) == -1 ? false : true;
  
 }



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    // check if collection is array and if true, call func once for each element
    if (Array.isArray(collection) == true) {
        // for loop that loops through collection
        // start: 0
        // end: last element of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // call func once for each element
            func(collection[i], i, collection);
        }
    // check if collection is an object and if true, call func once for each property
    } else if (typeof collection == 'object') {
        // for in loop that loops through colection
        for(let key in collection) {
            // call func once for each property
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


_.unique = function (array) {
    // initialize newArray variable to an empty array
    let newArray = [];
    // for loop that loops through array
    // start: 0
    // stop: last element of array
    // increment by 1 each loop
    for(let i = 0; i < array.length; i++) {
        // take value stored in ith element of array and search array for first
        // instance of that value
        let first = _.indexOf(array, array[i]);
        // check if ith element is the first element to contain its value
        if(first == i) {
            // if true, it is not a duplicate and is pushed to newArray
            // if false, i was a duplicate and is excluded from newArray
            newArray.push(array[i]);
        }
    }
    // return newArray
    return newArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

 _.filter = function(array, func) {
    // created empty array
    var myArray = [];
    // looping through array input
    // start: 0
    // stop: end of array
    for(var i = 0; i < array.length; i++) {
        // testing if calling func input equals true
        if(func(array[i], i, array) === true) {
            // if true, pushing ith element of array into myArray
            myArray.push(array[i]);
        }
    }
    // return myArray
    return myArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    
    // return the ._filter function, with arguments of array and a function
    // function takes paramters of element, index, and array
return _.filter(array, function(element, index, array){
    
    // return the falsy values of the functions, pushed to myArray
    // since the filter function already loops through the array
    // should return all elements that test false
  return !func(element, index, array);
});
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // create placeholders for the filter and reject arrays
    var trueArray = _.filter(array, func);
    var falseArray = _.reject(array, func);
   
    // for(var i = 0; i < array.length; i++) {
    //     // testing if calling func input equals true
    //     if(func(array[i], i, array) == true) {
    //         // if true, pushing ith element of array into myArray
    //         trueArray.push(array[i]);
    //     }
    // }
    // for(var x = 0; x < array.length; x++) {
    //     // testing if calling func input equals true
    //     if(func(array[x], x, array) === false) {
    //         // if true, pushing ith element of array into myArray
    //         falseArray.push(array[x]);
    //     }
    // }

// create an empty array to put the reject and filtered arrays into
    var finalArray = [];
    // add the filtered array through push method
    finalArray.push(trueArray);
    // add the reject aray into the final array 
    finalArray.push(falseArray);
    
    // return the 2 seperate arrays
    return finalArray;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    var newArray = [];
    // check if collection is array and if true, call func once for each element
    if (Array.isArray(collection) == true) {
        // for loop that loops through collection
        // start: 0
        // end: last element of collection
        // increment by 1 each loop
        for(let i = 0; i < collection.length; i++) {
            // call func once for each element
            newArray.push(func(collection[i], i, collection));
        }
    // check if collection is an object and if true, call func once for each
    // property
    } else if (typeof collection == 'object') {
        // for in loop that loops through colection
        for(let key in collection) {
            // call func once for each property
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop) {
    // initialize new array to map function
    // pass in array and a function that takes a parameter of object
    // _.map will take an array and a function, perform the function on thge array,
    // and return an array of the altered values
    // passed a function that loops through each object at each element of the array
    let newArray = _.map(array, function(obj) {
        // loop through each object
        for(var key in obj) {
            // return the key associated with the prop input of each object
            return obj[prop];
           }
    });
    // return newArray
    return newArray;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    
    // check if collection is an array
    // using the Array.isArray method to return a boolean of true
    if (Array.isArray(collection) === true) {
        
        // loop through the collection 
        // start at 0 index, end at the last index of collection
        for(let i = 0; i < collection.length; i++) {
            
            // conditional statement to test if the function exists
            // if the function does not exist, it will return undefined
            if (func == undefined) {
                
                // if the element at the ith index of collection array is false
               if (collection[i] == false) {
                   
                   // return false
                   return false;
               }
               //if function not passes in return true, jump to object else if
               return true;
               
               // call the function at element, index, arrau
               // test if the result is false and return false
           } else if (func(collection[i], i, collection) == false) {
                return false;
            }
        }
        
        // test if collection is an object through the typeof mehtod
    } else if (typeof(collection) === 'object') {
        
        // loop through the object with a for in loop
        for (let key in collection) {
            
            // calling the function passing in the value into element
            // key is an index, and collection is array, return false
            if (func(collection[key], key, collection) == false) {
                return false;
            }
        }
}
// return true
    return true;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    
    // check if collection is an array
    // using the Array.isArray method to return a boolean of true
    if(Array.isArray(collection) == true) {
        
        // loop through the collection 
        // start at 0 index, end at the last index of collection
        for(let i = 0; i < collection.length; i++) {
            
            // conditional statement to test if the function exists
            // if the function does not exist, it will return undefined
            if(func == undefined) {
                if(collection[i] == true) {
                    return true;
                }
                return false;
                
                // if the fucntion returns true at every ith element, index
            } else if(func(collection[i], i, collection) == true) {
                
                // return true
                return true;
            }
        }
        
        // trst if collection is object with typeof method
    } else if(typeof collection === 'object') {
        
        // use a for loop to interate through the objecy
            for (let key in collection) {
                
                // if value at key, key, and array function result to true
                if (func(collection[key], key, collection) == true) {
                    
                    // return true
                    return true;
                }
            }
    }
    
    // return false if all elements test false
    return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function{ return previousSum + currentValue(previousSum, currentValue, currentIndex) }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    // declare a prevRes variable
    let prevRes;
    // test: was seed paramater not was passed
    if(seed === undefined) {
        // if true, set prevRes to value of first element
        prevRes = array[0];
        // loop through array input
        // start: 1
        // stop: last element of array
        for(let i = 1; i < array.length; i++) {
            // set prevRes equal to the value obtained by executing func on the
            // next element of the array
            prevRes = func(prevRes, array[i], i);
        }
    } else {
        // set prevRes value to seed input
        prevRes = seed;
        // loop through array
        // start: 0
        // stop: end of array
        // increment by 1 each loop
        for(let i = 0; i < array.length; i++) {
            // set prevRes equal to the value obtained by executing func on the
            // next element of the array
            prevRes = func(prevRes, array[i], i);
        }
    }
    // return prevRes
    return prevRes;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...objects) {
    // convert parameters to an array
    let objectArray = arguments;
    
    // asign test to the first indec of objectArray
    let test = objectArray[0];
    // loop through array
    for(let i = 1; i < arguments.length; i++) {
        // take first object and pass ith object into it
        Object.assign(test, objectArray[i]);
    }
    return test;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
