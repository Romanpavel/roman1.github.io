/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    
    // for loop over animals array
    for (let i = 0; i < animals.length; i++) {
        
        // name equals index i of animals of value name
        
        if (name === animals[i].name) {
            return animals[i];
        }
    }
           return null;
    
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replace) {
    
    // for loop over the animals array
    
    
    for (let i = 0; i < animals.length; i++) {
        
        // animals at index i. value of name is equal to name
        
        if(animals[i].name === name) 
        
        // reasign the index i of animals to the replace function
        
            return animals[i] = replace;
        }
    }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    
    // for loop over animals arry 
    for(let i = 0; i < animals.length; i++) {
        
        // strict equals 
        if(animals[i].name === name) {
            
            //splice method removes value of array at index i
            return animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function add(animals, animal) {
    
    // length of each animal name and species are present 
    
    if (animal.name.length > 0 && animal.species.length > 0) {
        
        // loop through array
        
        for (let i = 0; i < animals.length; i++) {
            
            // make sure values are in same case
            
            if (animal.name.toLowerCase() === animals[i].name.toLowerCase()) {
                return null;
            }
        } 
       
       // outside of foor loop push value of animal into animals
       
  return animals.push(animal);
    }     
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
