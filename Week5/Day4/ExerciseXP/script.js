// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:
// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

async function fetchShips() {
    try{
    const res = await fetch("https://swapi.dev/api/starships/9");
    const resParse = await res.json();
    console.log(resParse)
    } catch(e) {
        console.log('Error', e)
    }
}
fetchShips();

// Exercise 2: Analyze
// Instructions
// Analyze the code provided above what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//guess: calling --> resolved
//outcome: calling --> resolved