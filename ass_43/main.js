"use strict";
// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//   Because the original array will be unchanged, return the new array and store it
//    in a separate array. Call show_magicians() with each array to show that you have one array
//     of the original names and one array with the Great added to each magician’s 
// name.
let magicians = ["alice", "david", "chris"];
function make_great(magicians) {
    let great_magician = [];
    magicians.forEach(magician => {
        console.log(magician);
    });
    return great_magicians;
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let great_magicians = make_great(magicians.slice());
console.log("Original Magicians");
show_magicians(magicians);
console.log("Great Magicians");
show_magicians(great_magicians);