// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]


let stringUser = prompt("enter a string separated by commas");
let stringSeparet = stringUser.split(","); //this is my array
console.log(stringSeparet);

let longest = stringSeparet.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
let star = "*";
let space = " ";
let white;
console.log(longest.length);
console.log(star.repeat(longest.length+4));
for(name in stringSeparet){
	let white = space.repeat(longest.length-stringSeparet[name].length)
	console.log(`* ${stringSeparet[name]} ${white}*`)
}
console.log(star.repeat(longest.length+4));
