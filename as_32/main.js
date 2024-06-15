"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that ev
// eryone has a unique username.
//  Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames a
// re also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, 
// print a message that the person will need to enter a new username. If a username has not been us
// ed, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been 
let current_user = ["raha", "alia", "heer", "hoor", "reem"];
let new_user = ["raha", "alia", "mirha", "meerab", "maria"];
for (let new_username of new_user) {
    new_username.toLowerCase();
    let found = false;
    for (let exsisting_username of current_user) {
        if (exsisting_username.toLowerCase() === new_username)
            found = true;
    }
    if (found) {
        console.log(`dear ${new_username} will need to enter new user name`);
    }
    else {
        console.log(`${new_username} is available`);
    }
}
