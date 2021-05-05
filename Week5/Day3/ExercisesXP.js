// Exercise 1:
// Write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10.

function compareToTen(num) {
    return new Promise((res, rej) => {
        if (num > 10) {
            res(`${num} greater than 10`)
        } else {
            rej(`${num} less than 10`)
        }
    })
}

compareToTen(14).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

// Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
let p = new Promise((res, rej) => {
    setTimeout(() => {
    if (true) {
        res("Sucsess")
    } else {
        rej('Ooops something went wrong')
    }
}, 4000);
})

p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

    Promise.resolve(setTimeout(() => {
        console.log('success');
    }, 4000))

    // Add code to catch errors and console.log ‘Ooops something went wrong’.
    Promise.reject(new Error('Ooops something went wrong')).then({},
        function (error) {
            console.log(error);
        });



        // Exercise 3 : Resolve & Reject
        // Instructions
        // Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
        // Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

    Promise.resolve(3).then(value => {
        return value;
    });

    Promise.reject('Boo').then({},
        function (error) {
            return error;
        });
