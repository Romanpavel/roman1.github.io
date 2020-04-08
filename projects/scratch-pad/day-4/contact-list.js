// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
    };

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length
        },
        addContact: function(contact) { // new object 
         contacts.push(contact);        // add contact into contacts array
        },
        findContact: function(fullName) { // new object 
            
         for (var i = 0; i < contacts.length; i++) {  // for loop over array
            
            // if statement to compare values of first and last name to fullName 
            
             if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                return contacts[i]
                
            } else {return undefined} // else statement 
         } 
        },
        removeContact: function(contact) {  // create a function
        
        // for loop to go over the array
        
            for (var x = 0; x < contacts.length; x++) {
                
                // if statemnt to strcitly compare
                
              if (contacts[x].nameFirst === contact.nameFirst) {
                  
                  // splice method removes 1 from x index
                  
                  contacts.splice(x, 1);
              }
              
                }
            },
            
            printAllContactNames: function() {
            
            var fullName = []; // create an array to store values 
            
            
            for (var y = 0; y < contacts.length; y++) {
                fullName.push(contacts[y].nameFirst + ' ' + contacts[y].nameLast);
            }
            
            var string = '';   // place to hold fullName in a string
            
            // iterate theough the fullName array
            
            for (var z = 0; z < fullName.length; z++) {
                if(z !== fullName.length - 1) {
                    string += `${fullName[z]}\n`;
                    
            } else if (z === fullName.length - 1) {
                string += fullName[z];
            }
        }
        return string; 
    }





// YOUR CODE GOES ABOVE HERE //

};
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
