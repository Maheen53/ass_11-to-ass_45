//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
//  make_great() that modifies the array of magicians by adding the phrase the Great to each 
//  magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians : string [] = ["alice" , "david" , "chris"]

 function show_magicians(magician : string []) {
    magicians.forEach(magician => {
        console.log(magician);
        
    });
 }

 show_magicians(magicians)

 function make_great(magicians:string[]) {
    for(let i = 0; i < magicians.length ;i++ ){
      magicians[i] = magicians[i] +   "The Great"
    }
 }
 

 make_great(magicians)

 show_magicians(magicians)