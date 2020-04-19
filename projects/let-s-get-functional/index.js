// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-roman1.github.io');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./roman1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //I: aaray
    //O: Number
 let filterOut =   _.filter(array, function(customerObj){
        // filter out all of the male customers
        return customerObj.gender === 'male';
    })
    
    return filterOut.length
};

var femaleCount = function(array) {
    //I: array of customer objs
    //O: number of female customers
   return _.reduce(array, function(prev, current){
        // when to increment our seed
            // if our customer has a gender of female
        if(current.gender === 'female') {
            prev += 1;
        }
        // when to not increment our seed
            // do not increment if not a female
        return prev;
    }, 0)
}

var oldestCustomer = function(array) {
    // I: array of customer objects
    // O: a string of the oldest customer
    
    // create a variable and assign it to start of 0
    var oldestPerson = 0 ;
    return _.reduce(array, function(prev, curr) {
        if(curr.age > oldestPerson) {
            oldestPerson = curr.age;
            return curr.name;
          
        }
        return prev;
    
    }, '');

};
var youngestCustomer = function(array) {
    // I: array of customer objects
    // O: a string of the oldest customer
    
    // create a variable and assign it to start of 0
    var youngestPerson = Infinity ;
    return _.reduce(array, function(prev, curr) {
        if(curr.age < youngestPerson) {
            youngestPerson = curr.age;
            return curr.name;
          
        }
        return prev;
    
    }, '');

};


var averageBalance = function(array) {
    //I: an array of customer objects
    //O: the avarage balance of all customers as a number
    
    
    return _.filter(array, function(sum) {
        for (var key in sum) {
            sum[key] += sum
        }
        return _.reduce(array, sum)
    })
    
    // return _.reduce(array, function(sum, people) {
    //     for(var key in sum) {
    //         sum[key] += sum;
    //     }
    //     return sum/people;
        
    }, 0);
};


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
