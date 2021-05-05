// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]

function makeAllCaps(arr){
    let p = new Promise((res, rej) => {
        if (arr.every(i => (typeof i === "string"))) {
            res(arr.map(name => name.toUpperCase()))
        } else {
            rej('is not string array')
        }
})
sortWords(p)
}

function sortWords(p){
    p.then((message) => {
        console.log(message.sort());
    }).catch((message) => {
        console.log(message);
    })
}


let arrayOfWords = ['cucumber', 'tomatos', 'avocado']
let complicatedArray = ['cucumber', 44, true]
makeAllCaps(complicatedArray)