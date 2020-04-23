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
    
    // using the redue function which takes an array and a function, seed of a string
    // function takes a prev and curr parameter 
    // loops over the array and applies function to every element
    return _.reduce(array, function(prev, curr) {
        
        // using dot notation to access age of current person
        // if current is larger than 0 asign to the oldest person
        if(curr.age > oldestPerson) {
            oldestPerson = curr.age;
            
            // since we have a loop in the reduce function 
            // constantly replaces oldest person till it reaches the oldest
            return curr.name;
          
        }
        return prev;
    
    }, '');

};
var youngestCustomer = function(array) {
    // I: array of customer objects
    // O: a string of the oldest customer
    
    // create a variable and assign it to start of infinity
    // since were looking for the youngest, start at the top and work backwards
    var youngestPerson = Infinity ;
    
    // return the function of reduce, takes a prev and curr parameter, seed of empty string
    return _.reduce(array, function(prev, curr) {
        
        // loops over the array, conditional if current age is smaller than infinity
        if(curr.age < youngestPerson) {
            
            // re- asigns yougest person to find the smallest age
            youngestPerson = curr.age;
            
            // returns the name of the current parameter 
            return curr.name;
          
        }
        return prev;
    
    }, '');

};


var averageBalance = function(array) {
    //I: an array of customer objects
    //O: the avarage balance of all customers as a number
    
 // using reduce, for array, function, and seed 0
 // function takes parameter of sum and current value
    var average = _.reduce(array, function(sum, curr){
        
        // add up all the values of balance
        // parseFloat return a string as a number
        // slice method takes off the $ of the string balance
        // split method by the comma
        // join method to join the number without the comma
        
         sum += parseFloat(curr.balance.slice(1).split(',').join(''));
         return sum;
        
        // divide the result by the amount of customers
    }, 0) / array.length;
    
    // return the average
    
return average;
};

var firstLetterCount = function(array, letter) {
      // I: an array of objects and a letter
      // O: a number of how many people have a given letter that name starts with
      
      
      // filter function, with array, function, 
      // array of objects 
      // function with parameter of name and firstLetter
      var count = 0;
       _.filter(array, function(customerObj){
          
          // start count at 0
         
          
         
          // if the first character of name string is equal to the firstLetter
          // access first character wtith charAt(0)
          // make sure all words are same case
          // increase count by 1
           
                 if (customerObj.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                     count++;
        
          }
          
          
      
          
      });
    
      return count
};



var friendFirstLetterCount = function(array, customer, letter) {
    // I: an array of object, a customer name and a letter
    // O: a number representing the amount of friends that have the first letter
    
    
    // start count at 0
    
    var count = 0
    
    // declare a variable for simplicity
    var customerObj;
    
    // loop over the array of objects
     for (let i = 0; i < array.length; i++) {
         
         // conditional statement if name at each customer mathes that customer
         if (array[i].name === customer) {
             
             // reasign the customerObj object to the object of the customer
             customerObj = array[i]
         }
     }
     
     // create an variable and asign it to the friends array of the customer
    var customersFriendsArray = customerObj.friends
    
    // loop over the new array of the friends array of each customer
    for (let y = 0; y < customersFriendsArray.length; y++) {
        
        // conditional statement if the first character of value associated with freinds, upercased
        // is equal to the uppercased letter
        if(customersFriendsArray[y].name.charAt(0).toLocaleUpperCase() === letter.toUpperCase()) {
            
            // increase count
            count++
        }
    
         
     
    
}

    // return the count
    return count

};

    




var friendsCount = function(array, name) {
    // I: an array of objects, and a name
    // O: an array of customers names that have a specific name in their freinds array
    
    
    // create an array to hold the values of names with certain friends
    var nameArray = []
    
    // use the filter function 
    
    _.filter(array, function(customerObj) {
        
        // loop through the friends array, stopping at total number of friends
        
        for (let i = 0; i < customerObj.friends.length; i++) {
        
        // conditional statement to test every name in friends array to given name 
        
            if (customerObj.friends[i]['name'] === name) {
                
                // push the name of customer with given name in friends array
            nameArray.push(customerObj['name']);
        }
        }
       
    })
    return nameArray;
}




var topThreeTags = function(array) {
      // I: an array of objects
      // O: an array of the 3 most common tags
      
      
      // use _.pluck function to return an array of tags
      var allTags = _.pluck(array, 'tags');
      

      // create variable to put all tags into a single array
      var allTagsArray =  _.reduce(allTags, function(acc, curr) {
          
          // return a single array with all tags
          return acc.concat(curr);
         
          // seed of empty array
      }, []);

      // using unique function to return array with all duplicates removed
      // to test later
      
      var uniqueTags = _.unique(allTagsArray)
    
    // using map function create an object with tag name and the # of times tag appears
      
      var numberOfOccurances = _.map(uniqueTags, function(currentTag) {
          let obj = {}
          obj[currentTag] = 0
          return obj;
          
      });
      
      // loop over ALL the  the tags from allTagsArray 
      
    for (let i = 0; i < allTagsArray.length; i++) {
        
        // using includes method, we can test if any tags from uniqueTags array
        // incude the tag in allTagsArray at ith index
        
        if (uniqueTags.includes(allTagsArray[i])) {
            
            // iterate through the numberOfOccurances array of objects
           
            for(let x = 0; x < numberOfOccurances.length; x++) {
                
                // test if the ith tag in the array of objects doesnt exist
                
                if (numberOfOccurances[x][allTagsArray[i]] !== undefined) {
                    
                    // increment the tag by 1 for every tag at the value
                   
                    numberOfOccurances[x][allTagsArray[i]]++;
                }
            }
           
           
        }
    }
    
    // turn an array of objects into an array of arrays 
var sort = [];

for (let i = 0; i < numberOfOccurances.length; i++) {
    for (var tag in numberOfOccurances[i]) {
        sort.push([tag, numberOfOccurances[i][tag]]);
    }
}

// sort the array from highest number to lowest amout of tags

sort.sort(function(a, b) {
    return b[1] - a[1];
});

// take out the top 3 most mentioned tags using splice

var top3 = sort.splice(0, 3);

// just return the tag names

var top3tags = [];

for(let i = 0; i < top3.length; i++) {
    top3tags.push(top3[i][0]);
}

return top3tags;
};



var genderCount = function(array) {
    // I: an array of objects
    // O: an object with keyvalue pair of gender 
    
    // return the reduce function 
    
    return _.reduce(array, function(acc, currObj) {

    // if the gender of the current customer is male
    // add male to the male seed

        if (currObj.gender === 'male') {
            acc.male++;
            
            // if gender of customer is female
            
        } else if (currObj.gender === 'female') {
            // increase female seed by 1
            acc.female++;
            
            // if customer is non-binary
        } else if (currObj.gender === 'non-binary') {
            
            // increase 'non-binary' seed by 1
            acc['non-binary']++;
        }
     
     // return the accumulator
     return acc;
      
    }, {male: 0,
    female: 0,
    'non-binary': 0});
    
};

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