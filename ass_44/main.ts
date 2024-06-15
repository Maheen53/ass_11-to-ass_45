// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
// that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

function making_sandwish(...items:string[]) {
    console.log(`making a sandwiish with ${items.join(",")}`);
    
}
making_sandwish("ham" , "chees")

making_sandwish("turkey" , "lettus" ,"tomatto")

making_sandwish("avacado" , "sprout" ,"mustard" ,"mayo")