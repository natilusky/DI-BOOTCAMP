// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

//1.  Create an array which value is the planets of the solar system.
//2.  For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
//3. Each planet should have a different background color. (Hint: add a new class to each planet).
//4. Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let color = ['yellow', 'green', 'blue', 'orange', 'grey', 'white', 'pink', 'violet', 'red'];
let moons = [0, 0, 1, 0, 4, 9, 6, 3, 1];
let i = 0;

for (let k = 0; k < planets.length; k++) {
    document.body.appendChild(document.createElement('div'));
    document.body.children[i + 1].className = "planet";
    document.body.children[i + 1].classList.add(planets[k]);
    document.body.children[i + 1].style.background = color[k];
    document.body.children[i + 1].appendChild(document.createTextNode(planets[k]))
    i++;
    if (moons[k] > 0) {
        for (let j = 0; j < moons[k]; j++) {
            document.body.appendChild(document.createElement('div'));
            document.body.children[i + 1].className = "moon";
            document.body.children[i + 1].appendChild(document.createTextNode(j+1));
            i++;
        }
    }
}