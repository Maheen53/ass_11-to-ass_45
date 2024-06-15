"use strict";
const study_group = [`admin`, `mahi`, `irha`, `mahbir`, `zaviar`];
// for (let group in study_group) {
//   console.log(
//     `Greetings and welcome to [MI SOFTWEAR COMPANY]! We are delighted to see you as a part of our community. Feel free to discover, interact, and collaborate with us to create something wonderful." "Hello, ${study_group}!`
//   );
// }
study_group.forEach(group => {
    console.log("Greetings and welcome to [MI softwear co]! We are delighted to see you as a part of our community. Feel free to discover, interact, and collaborate with us to create something wonderful Hello,   " + group);
});
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
console.log(`Hello  ${study_group[0]} , would you like to see a status report?`);
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
study_group.forEach(group => {
    console.log(`Hello  ${group} , thankyou for logging in again`);
});
