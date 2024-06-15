let placeTovisit : string [] = ["paris" , "nwyork" , "rome" ,"italy" , "china" ]

// prin in original order

console.log("original order" ,placeTovisit);

// print your array in alaphabetical order

console.log("Alphabetical order" , placeTovisit.slice().sort());

// array is still print in original order


console.log("original order" ,placeTovisit);

// reverse order

console.log("reverse order",placeTovisit.slice().sort().reverse());

// array is still in original order

console.log("original order" ,placeTovisit);

// Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse order changed");

placeTovisit.reverse()
console.log(placeTovisit);

//• Reverse the order of your list again. Print the list to show it’s back to its original order.


console.log("original order" , placeTovisit.sort());
console.log(placeTovisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("reverse alphabetical order changed",placeTovisit.sort().reverse());

console.log(placeTovisit);

