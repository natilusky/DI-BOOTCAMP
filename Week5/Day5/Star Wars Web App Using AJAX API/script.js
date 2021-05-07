let namef = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birthYear = document.getElementById("birth-year");
let homeWorld = document.getElementById("home-world");
let button = document.getElementById("button")

function getData() {
    let xhr = new XMLHttpRequest();
    let randomNumber = parseInt(Math.random() * 83)
    xhr.open('GET', `https://swapi.dev/api/people/${randomNumber}/`);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Error: ${xhr.status}: ${xht.statusText}`);
        }
        else {
        updateCharacters(xhr.response)
        }
    }
    xhr.onerror = function () {
        console.log('Error');
        printError();
    };
}


async function getHomeWorld(homeworld) {
    try {
        let response = await fetch(homeworld);
        if (response.status !== 200) {
            throw Error;
        }
        let data = await response.json();
        return (data.name);
    } catch (err) {
        console.log(err);
    }
}

async function updateCharacters(data) {
    namef.innerHTML = `Name: ${data.name}`;
    height.innerHTML = `Height: ${data.height}`
    gender.innerHTML = `Gender: ${data.gender}`
    birthYear.innerHTML = `Birth Year: ${data.birth_year}`
    homeWorld.innerHTML = `Home World: ${await getHomeWorld(data.homeworld)}`
}

function loadingCharacters() {
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

function printError() {
    names.innerHTML = 'Oh No! That person isnt avaible.';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}
button.addEventListener('click', getData);