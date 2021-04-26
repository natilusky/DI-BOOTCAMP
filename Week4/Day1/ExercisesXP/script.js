// ===================== Exercise 1 : Scope =========================
// Instructions
// What is the value of a in all the following functions.


// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
//guess = 3 || outcome = 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
//guess = 0 || outcome = 0

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
}
//guess = 0 || outcome = 0

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
//guess =  test || outcome = test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//guess = 5 || outcome = 5



// ======== Exercise 2 : Ternary Operator ==============
//Instructions
// Change the conditional into a ternary and assign the function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

function experiencePoints() {
  let result = (winBattle()) ? 10 : 1;
  return result;
}
let experiencePoints = experiencePoints();

// ================= Exercise 3 : Colors ============
// Instructions
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, i) => {
    console.log(i+1 + '# choice is ' + color + '.');
});


// ========== Exercise 4 : Colors #2 ======================
// Instructions
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
colors.forEach((color, i) => {
    switch (i + 1) {
        case 1:
            console.log(i + 1 + ordinal[1] + ' choice is ' + color + '.');
            break;
        case 2:
            console.log(i + 1 + ordinal[2] + ' choice is ' + color + '.');
            break;
        case 3:
            console.log(i + 1 + ordinal[3] + ' choice is ' + color + '.');
            break;
        default:
            console.log(i + 1 + ordinal[0] + ' choice is ' + color + '.');
    }
});

// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false
function stringCheck(str){
    return typeof str == 'string';
}



// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use:
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

var bankAmount = 20000;
const VAT = 1.17;
let details = ["+200", "-100", "+146", "+167", "-2900"];
var endAmount = bankAmount;
for (let i = 0; i < details.length; i++){
  details[i] < 0 ? details[i] *= VAT : details[i] = parseInt(details[i]);
  endAmount += details[i];
}
console.log(endAmount);