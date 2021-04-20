// Exercise 2 : Users
// Instructions

//1. In the HTML above change the name “Pete” to “Richard”.
let allLi = document.getElementsByTagName("li")
allLi[1].innerText = "Richard";

// 2.Change each first name of the two <ul>'s to your name.
let list = document.getElementsByClassName('list');
list[0].firstElementChild.textContent = "Netanel";
list[1].firstElementChild.textContent = "Netanel";

//3. At the end of each <ul> add a <li> that says “Hey students”.
let newElement1 = document.createElement("li");
let newElement2 = document.createElement("li");
let newTextNode = document.createTextNode("Hey students");
let newTextNode2 = document.createTextNode("Hey students");
newElement1.appendChild(newTextNode);
newElement2.appendChild(newTextNode2);
list[0].appendChild(newElement1);
list[1].appendChild(newElement2);

//4. Delete the name Sarah from the second <ul>.
list[1].removeChild(list[1].children[1]);