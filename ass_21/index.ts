//  // ass_21

let objectContainingitems : {[key : string] : any} = {
      "laptop" : {
          name:"laptop",
          price:"30,000",
          description:"dell laptops (latitude) are really high in demand"

      },
      "keyboard": {
          name :"keyboard",
          price:1000,
          description:"this tool is really usefull for programmer"
      },
      "Mouse": {
          name:"mouse",
          price:400,
          description:"they usually used to select a block of code"
      }
}
console.log(objectContainingitems);
console.log(objectContainingitems.laptop.price);

console.log(objectContainingitems.keyboard.description);
console.log(objectContainingitems.Mouse.price);



