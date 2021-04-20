// Exercise 3 : Users And Style
// Instructions
// For the following exercise use the HTML presented above:

// 1. Add a “light blue” background color and some padding to the <div>.
let div = document.getElementsByTagName('div');
div[0].style.backgroundColor = "lightblue";
div[0].style.padding = "10px";

// 2. Do not display the first name (John) in the list.
let ul = document.getElementsByTagName('ul');
ul[0].children[0].style.visibility = "hidden";

// 3. Add a border to the second name (Pete).
ul[0].children[1].style.border = "1px solid red";

// 4. Change the font size of the whole body
document.body.style.fontSize = "2em";