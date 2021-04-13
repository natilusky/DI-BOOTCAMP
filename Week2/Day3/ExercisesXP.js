// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["red","blue","yellow","green","white","black"];
for (let i = 0; i < colors.length ; i++) {
	//console.log(`My #${i+1} choice is ${colors[i]}`);
	console.log(`My ${i+1}${(i==0 ? 'st' : (i==1 ? 'nd' : (i==2 ? 'rd' : 'th')))} choice is ${colors[i]}`);	
}

// Exercise 2 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.shift();
// Write code to replace “James” to “Jason”.
people[2] = 'Jason';
// Write code to add your name to the end of the people array.
people.push("Nati");
// Using a loop, iterate through the people array and console.log each person.
people.forEach(element => console.log(element));
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop. 
people.splice(2, 1);
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
let copyPeople = people.slice(1, 2);
// Write code that console.logs Mary’s index. take a look at indexOf on google.
console.log(people.indexOf("Mary"));
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
console.log(people.indexOf("Foo"));
// Create a variable called last which value is the last element of the array.
let last = people[people.length-1];
console.log(last);

// Exercise 3 : Repeat The Question
// Instructions
// Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let num = 0;
do{
num = prompt("Enter number please")
}while(num<10)

// Exercise 4 : Attendance
// Instructions
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// Given the object above where the key is the students name and the value is the country they are from.
// 1. Prompt the student for their name :
// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let name = prompt("Please enter your name");
if (guestList[name] !== undefined){
	console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
	console.log("Hi! I'm a guest.")
}

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).
let family = {
  firstName: "Netanel",
  lastName: "Lusky",
  id: "256854226",
  eyesColor: "Brown",
  city: "Bat-Yam",
  age : 31
}
for (property in family) {
  console.log(`${property}: ${family[property]}`);
}

// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
let str = '';
for (property in details) {
  str += property;
  str += ' ';
  str += details[property];
  str += ' ';
}
console.log(str);


// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let str = '';
names.sort();
for (let i = 0; i < names.length; i++) {
str += names[i].charAt(0);
}
console.log(str);