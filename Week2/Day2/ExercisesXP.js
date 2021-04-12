// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// If x equals 5 and y equals 2, the program should display:
// x is the biggest number

let x = 5;
let y = 2;
if (x > y)
	console.log(`${x} is the biggest number`);

// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

let newDog = "Chihuahua";
	console.log(newDog.length);
	console.log(newDog.toUpperCase());
	console.log(newDog.toLowerCase());
	if (newDog === "Chihuahua"){
		console.log("I love Chihuahuas, it’s my favorite dog breed")
	} else {
		console.log("I dont care, I prefer cats")
	}

// 	Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let num = parseInt(prompt("Enter number"));
if (num % 2 === 0){
	console.log(`${num} is an even number`)
} else{
	console.log(`${num} is an odd number`)

// Exercise 4 : Switch Case
// Instructions
// Using this function, answer the questions below:

// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }
// What is the returned value when moveCommand("forward") ---->  NULL
// What is the returned value when moveCommand("back")	------> "you arrived home"
// What is the returned value when moveCommand("right") ------> "you found a river"
// What is the returned value when moveCommand("left") -------> NULL

// Exercise 5: Group Chat
// Instructions
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let userLength = users.length;
    switch (userLength) {
        case 0:
        	console.log("no one is online");
            break;
        case 1:
        	console.log(`${users[0]} is online`);
            break;
        case 2:
        	console.log(`${users[0]} ${users[1]} are online`);
            break;
        default:
            console.log(`${users[0]} ${users[1]} and ${--userLength} users more are online`);
    }