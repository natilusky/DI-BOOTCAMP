//Exercise XP Gold

// Exercise 1: Date #1
// 1. In a new file called date.js, create a function that returns the amount of time left from now until January 1st. Export this function.
// 2. In the file script.js display the result of the function created in date.js.
// (Example: the 1st January is in 10 days and 10:34:01hours)

let date = require('./date.js')

console.log(date.calcDate);

// Exercise 2 : Date #2
// 1. In a new file called date2.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
// 2. In the file script.js display the result of the function created in date2.js.
let live = require('./date2.js')

let birthday = new Date(1989, 5, 24);
console.log(live(birthday));



