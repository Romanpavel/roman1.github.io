//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// should take an object and and return its values into an array
function objectValues(object) {
    
    // create an array for the returned value 
    
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

      // the function returns keys of 'object', with join operator
      return Object.keys(object).join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function valuesToString(object) {

// create array
    const str = [];
    
    // loop over object
    for(var key in object) {
        
        // typeof operator returns a string of the key type
        if(typeof object[key] === 'string')
        
        // add the key to str array
        str.push(object[key]);
        
    }
    
    // join strings with space
    return str.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    
    // check if collection is an array
    if (Array.isArray(collection)){
        return 'array';
        
        // if its not an array than its an object
    }else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    // first index of string gets upercased and concat to the rest of string using slice
    
    return string[0].toUpperCase() + string.slice(1);
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    // convert string into an array broken up by spaces for individual words
    
    var strArray = string.split(' ');
    
    // for loop over the array
    
    for (var i = 0; i < strArray.length; i++) {
        
        // asign string at index i to capitalized word
        
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
    }
    
    // return capitilized words with a space between
    
    return strArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // return statement concat string welcome with name + !

    
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';

// access name and capitilize first letter


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    // return capitilized name concat 'is a' to capitilzed species
    
    return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    // if object posses 'noises' and exists
    
    if (object.hasOwnProperty('noises') && object.noises.length > 0 ) {
        
        // return noises as strings with space
        return object.noises.join(' ');
        
        // else noises does not exist
    } else if (typeof object.noises === 'undefined') {
            return 'there are no noises';
        } else {
            return 'there are no noises';
        }
    }  


 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    // create a an array spliting the array of objects sperate by space
    
    var myArray = string.split(' ');
    
    // for loop to go through each word in 'string'
    
    for(var i in myArray) {
        
        // if the words match
        if (myArray[i] === word) {
            return true;
       
        }
    }
 return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    // push in name into friends element of object
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

// loop over object to access friends value

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
    
    
    // create an array 
    
    var arr = [];
    
    // for loop over the array parameter
    for (var i = 0; i < array.length; i++) {
        
        // if parameter name is Not the same at given i index at value of name
        if (name !== array[i].name) {
            
            // boolean for false 
            var check = false; 
            
            // loop through the array at lenght of freinds key 
            for (var k = 0; k < array[i].friends.length; k++) {
                
                // check if parameter name is the same at given i index of array
                // check if exists in freinds key/value pair
                if (name === array[i].friends[k]) {
                    
                    // re-asign boolean to true
                    check = true;
                }
                
                // if boolean remains false add name to array
            }if (check === false) {
            arr.push(array[i].name);
            
        }
        }
    }
    
return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    // re-asign value of parameter key of parameter object to parameter value
    
   object[key] = value;
   
   // return the updated object with the value
   
   return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
////////////////////obj//////////////////////////////////////////////////

function removeProperties(object, array) {
    
    
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
    
    // create new array
     var newArray = [];
     
     // loop over data array
     for (var i = 0; i < data.length; i++){
         
         // if array does Not include index i of data, add it
         if (!newArray.includes(data[i])){
         newArray.push(data[i]);
         }
    }
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