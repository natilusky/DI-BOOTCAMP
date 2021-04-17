// Exercise 1 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

let age = parseInt(prompt("Please enter your age"));
function checkDriverAge(age) {
    if (age < 18){
    	console.log("Sorry, you are too young to drive this car. Powering off")
    }else if(age > 18){
    	console.log("You are old enough to drive, Powering On. Enjoy the ride!")
    }else{
    	console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }
}
checkDriverAge(age);

// Exercise 2 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

let testArr = [2, 100, 0, 0]
let amount = parseFloat(prompt("Please enter your amount"));
function changeEnough(arr, amount) {
	let sum = 0;
	let change = [0.25,0.1,0.05,0.01];
	for(let i=0; i < 4; i++){
		 sum += testArr[i] * change[i];
	}
	if (sum < amount)
		return false;
	return true;
	}
changeEnough(testArr, amount)

// Exercise 3: Find The Multiples Of 23
// Instructions
// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function Multiples() {
	let sum = 0;
	let outcome = '';
	for (let i = 0; i < 500; i++) {
		if (i % 23 == 0){
			sum += i;
			outcome += i + ' ';
		}
	}
	console.log("Outcome : " + outcome)
	console.log("Sum : " + sum)
}
Multiples();


// Exercise 4 : Amazon Shopping
// Instructions
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket(){
	let basket = prompt("Enter item to the basket");
	for (item in amazonBasket){
		if (basket === item){
			console.log(`${basket} is already in your basket`)
		}else{
			console.log("${basket} is not in your basket")
		}
	}
}
checkBasket();


// Exercise 5 : Shopping List
// Instructions
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no arguments.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill(){
	let sum = 0;
	for(let i=0; i < shoppingList.length; i++){
		for (avaible in stock){
			if((shoppingList[i] === avaible) && (stock[avaible] >= 1) ){
				stock[avaible]--;
				sum += prices[avaible];
			}
		}
	}
	console.log(`The price for all items is ${sum}`)
}
myBill();

// Exercise 6 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
let bill = parseInt(prompt("Please enter the amount of bill"));
function calculateTip(bill){
	let tip = 0;
	if (bill > 200){
		tip = bill * 0.1;
	}else if(bill > 50){
		tip = bill * 0.15;
	}else{
		tip = bill * 0.15;
	}
	console.log("Tip amount : " + tip)
	console.log("Final bill : " + (bill + tip))
}
calculateTip(bill);

// Exercise 7 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotel_cost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called plane_ride_cost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.
// Define a function called rental_car_cost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called total_vacation_cost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotel_cost(), plane_ride_cost() and rental_car_cost() inside the function total_vacation_cost.
// Call the function total_vacation_cost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the total_vacation_cost() function.
function hotelCost(){
let nights;
while(isNaN(nights = prompt("Enter the valid number of nights")));
parseInt(nights);
return nights * 140;
}

function planeRideCost(){
	let destination;
	do{
		destination = prompt("Enter the valid destination of nights");
	}while(!destination || !destination.match(/^[a-z]+$/i))
	switch (destination.toLowerCase()){
		case "london":
			return 183;
		case "paris":
			return 220;
		default:
			return 330;
	}
}

function rentalCarCost(){
let dayRent;
while(isNaN(dayRent = prompt("Enter the valid number of day to rent")));
parseInt(dayRent);
	if (dayRent <= 10)
		return dayRent * 40;
	return (dayRent * 40) * 0.95;
}

function totalVacationCost(){
	let car = rentalCarCost();
	let flight = planeRideCost();
	let hotel = hotelCost();
	console.log(`The car cost: ${car} the hotel cost: ${hotel}, the plane tickets cost: ${flight}.`)
}
totalVacationCost()

