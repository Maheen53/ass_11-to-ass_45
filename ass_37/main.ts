// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.

function make_tshirt(size : string , message : string) {
    console.log(`you order a ${size} tshirt with the message of ${message}  `);
    
}

make_tshirt("large" ,"i love typescript")

make_tshirt("medium","defult")

make_tshirt("small" ,"i love typescript")