// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
// In this exercise you will complete the functionality with event listeners.

// Follow these steps :

// 1. Get the value of each of the inputs in the HTML file when the button is clicked.
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.


let input = document.getElementsByTagName("input");
let button = document.getElementById("lib-button");
let story = document.getElementById("story");

function subFun(){
	for (let i = 0; i < input.length; i++) {
		if (input[i].value === "") {
			alert("values are empty");
			return;
		} else {
			story.textContent = ` ${input[0].value} ${input[1].value} ${input[2].value} ${input[3].value} ${input[4].value}`;
		}
	}
}

button.addEventListener("click", subFun);