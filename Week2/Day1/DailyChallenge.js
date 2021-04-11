// Instructions
// Exercise 1:
// Using this array :
// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift(); 
//["Apples", "Oranges", "Blueberries"]
fruits.sort();
//["Apples", "Blueberries", "Oranges"]
fruits.push("Kiwi");
//["Apples", "Blueberries", "Oranges", "Kiwi"]
fruits.splice(0, 1);
//"Blueberries", "Oranges", "Kiwi"]
fruits.reverse();
console.log(fruits); //["Kiwi", "Oranges", "Blueberries"]

// Exercise 2:
// Using this array :
// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]); // ["Oranges"]
