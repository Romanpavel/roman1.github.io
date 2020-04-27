// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //I: a number
  //0: a factorial of the number
  
  // create a starting variable and set it equal to 0
  var p = 0;
  
  // make sure its positive
 if (n < 0) {
   return null
   
   // if n is 0 return 1
 } else if (n === 0) {
   return 1;
 }
 // mutlply n by itself by the next number down until 0
 return p = n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //I: an array of numbers
  //O: sum of numbers in array
  
  // if no numbers are in the array return 0
  if (array.length === 0) {
    return 0
    
    // add the first index of the array to the rest of the array 
  } else {
    return array[0] + sum(array.slice(1))
}
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  
  //I: a number
  //O: a boolean if number is even
  
  // check if number exists above first odd integer
  if (n > 1) {
    
    // return the number subtracting 2 till 0
    return isEven(n - 2);
    
    // check if number is negative
  } else if (n < 0) {
    
    // return postive even number
    return isEven(n + 2); 
    
    // check if 0 and return true
  } else if (n === 0) {
    return true;
    
    // check if n is equal to 1 and return false
  } else if (n === 1) {
    return false
  }
  // return the function at every number n having passed all tests
  return isEven(n)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  
  // I: a number
  // O: a number that summed up all numbers below that number
  
  // create a variable to hold a number
var num = 0;

// if the number is 0 return 0
if (n === 0) {
  return 0;
  
  // if the number exists add the number with all number below it
} else if (n > 1) {
  num = n - 1 + sumBelow(n - 1);
  
  // if the number is negative, sum with the number above
} else if (n < 0) {
  num = n + 1 + sumBelow(n + 1);
}
// return the sum of integers
return num;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  
  // I: 2 numbers
  // O: an array of all integers between 2 given numbers
  
//BaseCase- when x is = to when y -1 return an empty array
  if(x === y - 1){
    return [];
  }
  if(x === y + 1){
    //EdgeCase- when x is = to when y + 1 return an empty array
    return [];
  } //EdgeCase- when x is equal to y return an empty array
  if (x === y){
    return [];
  }
  //RecursiveCase- when x > y return an empty array
  if(x > y){
    return range(x, y + 1).concat(y + 1);
  }
  //RecursiveCase- when x > y return an empty array
  return range(x, y - 1).concat(y - 1);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
if (exp === 0) {
  return 1;
} else if (exp === 1) {
  return base;
} else if (exp > 1) {
  return (base * exponent(base, exp-1));
  } else if (exp < 0) {
    return 1 / exponent(base, -exp);
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
  // I: a number
  // O:a boolean if the number is a power of 2
  
  // if n is equal to 1 return true
  if (n === 1) {
    return true
    
    // if n is negative or zero return false
  } else if (n < 1) {
    return false
  }
  // return n divided by 2 that passes all tests
  return powerOfTwo(n / 2)
  
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  // if its an empty string return an empty string
  if (string === "") {
    return "";
    
    // return the string at the 2nd index plus the first character
    // iterate through the enitre string till array is in reverse order
  }else {
    return reverse(string.substr(1)) + string.charAt(0)
}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // I: a string
  // O: boolean value if string is equal forward and backward
  
 
  // if string is a single character it is a palindrone
if (string.length <= 1){
  return true;
}

// make sure all chararcter are the same case and no spaces
  var newStr = string.toLowerCase().trim();
  
  // asign new variable to the length of the string with no spaces and same case
  
  var stringLength = newStr.length;
  
  // if the first letter is not the same as the last letter return false
  if (newStr[0] !== newStr[stringLength - 1]){
    return false;
  }
  
  // return test of characters increminting up 1 from 1st character and
  // down one from last character
  
  return (palindrome(newStr.slice(1, -1)));

  
  // test if first and last letter is the same, move index in
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  
    if (y > 0) {
        return x + multiply(x, y - 1);
    }
    else if (y < 0) {
        return -x + multiply(x, y + 1);
    }

    return 0;
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  // I: 2 strings
  // O: boolean if strings are identical
  
  
  // base case if the string exists
  if(str1.length === 0 && str2.length === 0) {
    
    // match the first indexes 
    if(str1[0] === str2[0]) {
    return true;
    }
  }
  
  // if the first characters do match slice method returns the string at the 2nd index
  // function calls itself matching each subsequent letter 
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  
  // if the first characters do not match, no need to moe forward
  if(str1[0] !== str2[0]) {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

// I: a string
// O: an array of strings


var createArray = function(str){
  
  // base case, if string doesnt exist return an array
  if(str.length === 0) {
    return [];
  }
  
  // using recursion slice the string from first to last character
  // return the last string taken off, which is the first string in the array
  // concat the string into an array
  return createArray(str.slice(0, str.length - 1)).concat(str[str.length - 1]);
};

// 17. Reverse the order of an array



var reverseArr = function (array) {
  if(array.length === 0) {
    return [];
  }
  return reverseArr(array.slice(1)).concat(array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

// I: 2 numbers a value, and length
// O: an array of the value limited by the length number


var buildList = function(value, length) {
  
  // base case if there is no length, empty array
  if(length === 0) {
    return [];
    
    // check if value is not given, add empty array
    
  } else if (Array.isArray(value) && value.length === 0) {
    return buildList(value, length - 1).concat([[]])
  }
  
  // using recursion decriment from the length. then add the value
  
  return buildList(value, length - 1).concat(value);
  
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (!array.length) { return 0}
  return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  // I: an array, and a fucntion
  // O: an array

// base case if array is empty
 if(!array.length) {
  return [];
 }
 
 // return the array, then use the concat method to add recursion by multplying the 
 // last element by 2 and returning a new array
 
 return rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1]));
 
  
};




// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

  
  
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
  // I: an array
  // O: a number 
  
  // base case of n equal to 0
  if (n === 0) {
    return 0;
    
    // edge case
    
   } else if (n === 1) {
      return 1;
    
    
    // if n is a negative number return null
  } else if ( n < 0) {
    return null;
  }

// return a recursive function adding the last 2 numbers of behind n
  
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  
  // base case if there is no words in the array, return an empty array
  
  if(input.length === 0) {
    return [];
  }
  
  // recursive fucntion slicing the whole array, then adding the last word uppercased
  
  return capitalizeWords(input.slice(0, input.length - 1)).concat(input[input.length - 1].toUpperCase());
  
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
  // I: an array
  // O: an array with the first letter capitilized 
  
  // base case if array is empty
  
  if (array.length === 0) {
    return [];
  }
  
  return capitalizeFirst(array.slice(0, array.length - 1)).concat(array[array.length - 1][0].toUpperCase() + array[array.length - 1].slice(1));
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  
  // I: a string and an object
  // O: an object with number associted with time key is present in object
  
  // base case at no string, return the given object
  
if(str.length === 0) {
  return obj;
}

// if obj has a value at the first index, increment by 1

if(obj.hasOwnProperty(str[0])) {
  obj[str[0]] += 1;
  
  //  create property and asign it to 1
} else {
  obj[str[0]] = 1;
}

// using recurscion bring back starting at the 2nd index

return letterTally(str.slice(1), obj);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  
  // I: array
  // O: array with all duplicates removed
  
  // create a list to house all non-dupplicates
  
  var values = [list[0]];
  
  // if there is 1 element in the array return the values list
  // base case
  
  if(list.length === 1) {
    return values;
  }
  
  // recursive if the last value is equal to the second index of list
  if (values[values.length - 1] === list[1]) {
    
    // return the function with the array starting at 2nd element
    return compress(list.slice(1));
  } else {
    return values.concat(compress(list.slice(1)));
  }
  
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  
  // create a list to contain the 0
  
  let values = [array[0]];
  
  // base case, if there is 1 element in the array, return values
  
  if (array.length === 1) {
    return values;
  }
  
  // if the last index does not match the 2nd index of array
  if (values[values.length - 1] !== array[1]) {
    
    // return the values concated starting at second index
    return values.concat(minimizeZeroes(array.slice(1)));
  } 
  
  // if they are equal and each euqal 0 return the recursive function
  
 if (values[values.length - 1] === array[1]) {
   if (values[values.length - 1] === 0 && array[1] === 0) {
      return minimizeZeroes(array.slice(1));
      
      // else return the concated values starting at 2nd index
  } else {
    return values.concat(minimizeZeroes(array.slice(1)));
  }
}
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
  
  // I: an array
  // O: an array with the alternate numbers
  
  // create a base case  
  
  if(array.length === 0) {
    return [];
  }
  
  // if the first index of array is less than 0
  if (array[0] < 0) {
    
    // asign it to the negative
    array[0] = -array[0];
  }
  
  // do opposite of above
  
  if (array[1] > 0) {
    array[1] = -array[1];
  }
  
  // recursive case concating the different elements togehter into 1 array
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  // create object of key/value pairs
  
  var myObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  
  // create an variable to hold string
  
  var result = '';
  
  // base case
  
  if (str.length === 0) {
    return result;
  } else {
    
    // create a varaible to hold current character
    var currentChar = str.charAt(0);
    
    // if obj exists add value to current result
    if (myObj[currentChar]) {
      result += myObj[currentChar];
      
      // else add up result to the currentChar
    } else {
      result += currentChar;
    }
    
    // recursive case
    return result + numToText(str.slice(1));
  }
  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
