let guestlist = ["abdullah", "maheen", "hina"];
console.log("unfortunately ! new dinner table are arrives and we invite only two guest in our party");
// add guest in your list
guestlist.unshift("eda", "zonain");
console.log(guestlist);
// remove a guest with appology message
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    if (removeguest != undefined)
        console.log(`sorry ${removeguest} we have a shortest dinning for dinner`);
}
// print a messag to those who are invited adinner
guestlist.forEach(guest => {
    console.log(`dear ${guest} you are inivited a dinner`);
});
// make empty list
guestlist.splice(0, guestlist.length);
console.log(guestlist);
export {};
