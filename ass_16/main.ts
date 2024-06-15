let guestlist : string [] = ["abdullah sheikh" ,"maheen sheikh" ,"hina naseer"] ;

console.log("Great news ! we found a bigger dinning table");

// // unshif method

guestlist.unshift("zonain")

console.log(guestlist);

// // splice method 

guestlist.splice(Math.floor(guestlist.length/2),0,"mahbir")

// // push

guestlist.push("zviar")

console.log(guestlist)

guestlist.forEach(guest => {
console.log(`Dear ${guest} you are cordially invited a dinner`);
 
});


