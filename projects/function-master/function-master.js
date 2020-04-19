//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// should take an object and and return its values into an array
function objectValues(object) {
    //I: takes an object
    //O: values of object in an array
    
    
    
    // create an array for the returned values 
    
    const resultArr = [];
    
    // loop over object, accessing every key in the object 
    
    for (let key in object) {
        
        //at the value of key of object, push that value into resultArr array
        
    resultArr.push(object[key]);
}

// return the resultArr to show the values of the object in an array

return resultArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function keysToString(object) {
    
    //I: an object
    //O: all the keys of an object printed in string, seperated by a comma

      // the function returns keys of 'object', with join operator
      // Object.keys method returns all keys of Object
      // using join operator, put keys in an array seperated by a space
      // the space fills in a comma
      return Object.keys(object).join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function valuesToString(object) {
    
    //I: object
    //O: returns the values of object as an array of strings

// create array to hold the values of the string
    const str = [];
    
    // loop over object accessing every key
    for(var key in object) {
        
        // typeof operator returns a string of the key type
        // if the value is a string data type, run code
        if(typeof object[key] === 'string')
        
        // add the key to str array through push method
        str.push(object[key]);
        
    }
    
    // join strings with space
    return str.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    //I: an argument
    //O: 'array' if its an array, 'object' if its an object
    
    
    // check if collection is an array using Array.isArray method
    if (Array.isArray(collection)){
        return 'array';
        
        // if its not an array than its an object
        // all other dataTypes are objects
    }else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    //I: takes a string, or word
    //O: capitilizes the first letter of the word
    
    // return statement accesing the first index of string
    // using .toUpperCase to capitilize that index
    // slice method adds the rest of the rest o the string starting at 1 index
    //concat the first letter uppercased to the rest of the word
    
    return string[0].toUpperCase() + string.slice(1);
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    // I: takes a string
    // O: all wprds are capitilized
    
    // convert string into an array broken up by spaces for individual characters
    
    var strArray = string.split(' ');
    
    // for loop over the created array
    // start at first index
    // stop at the end of the array
    // increment by 1
    
    for (var i = 0; i < strArray.length; i++) {
        
        // asign string at index i to capitalized word
        // at every iteration of i, capitilize the first index
        // add the capitilized index to the rest of the word using .substr
        // .substr starts extraction of string at first index
        
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
    }
    
    // return capitilized words with a space between
    
    return strArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // I: an object with a name property
    // O: returns that name with Welcome at the front, (!) at the end

    // return statement starting with string "welcome"
    // concat the capitilized letter of the first letter of name property
    // concat to the rest of the name starting at 1st index
    // concat to exlamation (!)
    
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';

// access name and capitilize first letter


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    // I: takes an object with a name property
    // O: returns the name of the object with 'is a' and the species
    
    // return statement capitilizing first letter of name and adding to rest of name
    // concat with string 'is a'
    // concat with the species name capitilized using the same slice method
    
    return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    // I: takes an object that may have property of noises
    // O: returns the nosises in an array, if doesnt have noises => no noises
    
    // if object posses 'noises' and exists
    // hasOnwProperty is method that returns a boolean,
    // strictly tests if object has a property or key of noises
    // && and operator that there is an index of noises
    
    if (object.hasOwnProperty('noises') && object.noises.length > 0 ) {
        
        // return noises as strings with space
        return object.noises.join(' ');
        
        // else noises does not exist
        // using typeof operator produces a string of the dataType
        // if its strictly equal to undefined 
        
    } else if (typeof object.noises === 'undefined') {
        
        // print there are no noises
            return 'there are no noises';
        } else {
            return 'there are no noises';
        }
    }  


 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    // I: {string} an array of words, {word} a single word
    // O: boolean if word matches a word in string array
    
    // create a an array spliting the array of objects sperate by space
    
    var myArray = string.split(' ');
    
    // for in loop to go through each word in 'string'
    
    for(var i in myArray) {
        
        // if at every ith index of myArray is strictly equal to {word} parameter
        if (myArray[i] === word) {
            return true; // return true
       
        }
    }
 return false; // return false for all else
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    // I: a string name {name}, an Object
    // O: add name to object 'friends' array
    
    // access friends property through dot notation
    // using the push method, add {name} to the array of friends
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    // I: a string {name} and an {object} person info
    // O: returns a boolean that tests if {name} is in friend array of {object}

// loop over object 
// using dot notation access friends array

for (var i in object.friends) {
    
    // if index i finds the same name return true
    if (object.friends[i] === name) {
        return true;
    }
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
    // I: {name} a name, {array} is a list of objects
    // O: create a list of all names that {name} string is not friends with
    
    // create an array to hold the list of non friends
    
    var arr = [];
    
    // for loop over the array parameter
    for (var i = 0; i < array.length; i++) {
        
        // if parameter name is Not the same at given i index at value of name
        if (name !== array[i].name) {
            
            // boolean for false 
            var check = false; 
            
            // loop through the array at length of freinds key 
            // start at the 1st index
            // stop at the ith index of friends array in array of objects
            // increment by 1
            
            for (var k = 0; k < array[i].friends.length; k++) {
                
                // check if parameter name is the same at given i index of array
                // check if exists in freinds key/value pair
                if (name === array[i].friends[k]) {
                    
                    // re-asign boolean to true
                    check = true;
                }
                
                // if boolean remains false add name to array
            }if (check === false) {
                
                // using push add the name to the list
            arr.push(array[i].name);
            
        }
        }
    }
    
return arr; // return the list of nonfreinds
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    // I: an object, a Key, and a value
    // O: update key property of object with a value
    
    // re-asign value of parameter key of parameter object to parameter value
    
   object[key] = value;
   
   // return the updated object with the value
   
   return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
////////////////////obj//////////////////////////////////////////////////

function removeProperties(object, array) {
    
    // I: an object and an array of strings
    // O: remove any properties of object that are listed in the array
    
    
    // loop over the object
    for (var key in object) {
        
        // then check by looping over array
        for (var i = 0; i < array.length; i++) {
            
            // conditional variable key is the same as given index i of array
            if (key === array[i]) {
                
                // if the key matches the key in array delete that key
                delete object[key]
            }
        }
        
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(data) {
    
    // I: {data} is an array of values
    // O: an array of values with all the duplicate removed
    
    // create new array
     var newArray = [];
     
     // loop over data array
     for (var i = 0; i < data.length; i++){
         
         // new array starts as an empty array
         // using the Not operator we test if at the ith index 
         // the newArray has a value
         if (!newArray.includes(data[i])){
             
             // since there is no value, we push the value into the new array
             // as the function loops through it will NOT push any value thats
             // already inside the new array
         newArray.push(data[i]);
         }
    }
    // return the new array with all the duplicates removed
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}