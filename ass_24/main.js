"use strict";
//• Tests for equality and inequality with strings
let personName = "Maheen";
let fatherName = "Imtiaz";
console.log(personName === fatherName);
console.log(personName === personName);
// • Tests using the lower case function
let uppercase = "BLACK";
let lowerCase = " black";
console.log(uppercase.toLowerCase() === lowerCase);
console.log(lowerCase === lowerCase);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const x = 22;
const y = 11;
console.log(x === y);
console.log(y !== x);
console.log(y > x);
console.log(y < x);
console.log(x >= y);
console.log(y <= x);
// • Tests using "and" and "or" operators
const m = 11;
const u = 20;
const z = 21;
console.log(m < u && z < u);
console.log(u > m || m > z);
