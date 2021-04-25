// 1. Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let article = document.getElementsByTagName("article")[0];
article.removeChild(article.lastElementChild);
//console.log(article);


// 2. Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let h2 = document.querySelector('h2');

h2.addEventListener('click', changeColor);
function changeColor(){
    h2.style.backgroundColor = "red";
}


//3. Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
 // let h1 = document.querySelector('h1');
 // let random = Math.floor(Math.random() * 100);
 // h1.style.fontSize = random + 'px';


//4. Add an event listener which will hide the h3 when it’s clicked on (use the display property).
let h3 = document.querySelector('h3');
h3.addEventListener('click',hideText);

function hideText(){
    h3.style.display = "none";
}


//5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let form = document.querySelector('form');
let body = document.body;
let button = document.createElement('button');
let textNode = document.createTextNode("Bold all");
button.appendChild(textNode);
form.appendChild(button);
let p = document.querySelectorAll('p');
button.addEventListener("click", boldAll);

function boldAll(){
    for ( let i=0; i < p.length; i++) 
         p[i].style.fontWeight = "bold";
}

// 6. When the “Submit” button of the form is clicked:
// // get the values of the input tags
// //make sure that they are not empty, then append them to a HTML table, in the div, below the form.
let submit = document.getElementById('submit');
let inputs = document.getElementsByTagName('input');
let table = document.createElement('table');
let tr = document.createElement('tr')
table.appendChild(tr)
let usersAnswer = document.querySelector('.usersAnswer')
submit.addEventListener('click', creatTable)
usersAnswer.appendChild(table)

function creatTable(event){
        event.preventDefault()
    for (let i=0; i < inputs.length; i++) {
        if(inputs[i].type === 'text') {
        let value = inputs[i].value;
        let th = document.createElement('th')
        th.innerText = value;
        tr.appendChild(th)
        } 
    }
}

// 7. When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

p[1].addEventListener('mouseover', fadeOut)

function fadeOut() {
    p[1].style.transition = "all 2s";
    p[1].style.opacity = "0";
}

//  EX 2 
//1. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
function getBold_items() {
    return document.querySelectorAll("strong");
}

//2. Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    let bold = getBold_items();
    for (let i=0; i < bold.length; i++) {
        bold[i].style.color = "blue";
    }
}
//3. Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    let black = getBold_items();
    for (let i=0; i < black.length; i++) {
        black[i].style.color = "black";
    }
}

//4. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph)
let para = document.getElementById('bold');
para.addEventListener('mouseover', highlight);
para.addEventListener('mouseout', return_normal);



// EX3
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let calculate = document.getElementById('calculate')
calculate.addEventListener('click', volCalc)

    function volCalc(event) {
        event.preventDefault();
        let radius = document.getElementById('radius');
        let volumeInput = document.getElementById('volume');
        let volume = 4 / 3 * Math.PI * (radius.value ** 3);
        volumeInput.value = volume;
        return volume;
}