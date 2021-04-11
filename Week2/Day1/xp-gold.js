// Exercise 1 : Favorite Color
// Instructions
// let me = ["my","favorite","color","is","blue"]

// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let me = ["my","favorite","color","is","blue"];
console.log(me.join());



// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix" let str2 = "pod"
// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// Finally console.log the new concatenated string.

let str1 = "mix";
let str2 = "pod";
let twoLetter1 = str1.substring(0,2);
let twoLetter2 = str2.substring(0,2);
let res1 = str1.slice(2, str1.length);
let res2 = str2.slice(2, str2.length);
str1 = twoLetter2 + res1;
str2 = twoLetter1 + res2;
let newWord = (str1 +" "+ str2);
console.log(newWord);

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));
let sum = num1 + num2;
// let dif = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;
alert(sum);