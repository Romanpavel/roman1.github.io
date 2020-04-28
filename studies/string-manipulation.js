
// strings are anything we want to write between quotes, either "" or ''
// this is very useful is javaScript as its a written language and makes naming things
// and referencing those things much easier
// sometimes we need to alter and access these strings, and there are several methods


// 1. strings have a couple operators 

// * a) + sign is used to add strings together of Concat them 

var x = 'string1';
var x2 = 'string2';

console.log(x + " " + x2); // returns 'string1 string2 

//   b) += sign is used to add the first string onto the second

var y = 'another string '; // assignment operator


var y1 = 'yet another string';


console.log(y); // returns another string yet another string 

// 2. String methods 

// there are several string methods

var change = "hello world"

change.charAt(0) // returns the character at a certain index => 'h'

change.toUpperCase() // upercase the string => "HELLO WORLD"

change.toLowerCase() // returns lowercase string => 'hello world'

change.slice(1, change.length) // slices a string at an index (from, to) => 'ello world'

change.split(' ') // splites string into an array at the splitter => '[hello], [world]'

change.concat('!') // smushes string into 1 string => 'hello world!''

change.startsWith('h') // checks if string starts with certain character => true

change.replace('world', 'friend') // replaces any instance of value with another one
                                      // => 'hello friend'



// there are several other methods with manipulating strings

