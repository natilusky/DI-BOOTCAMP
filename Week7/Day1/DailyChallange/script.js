//Daily Challenge : Modules
// Instructions

// Part I:
// 1. Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// 2. Use the exported module in a script.js file.
// 3.  In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const a = require("./main.js")

const b = 5;
let c = a.a +b;
console.log(c);

// Part II:
// 1. In a script.js file create a server with http and console.log a message.
// 2. Set the response header, and respond by the result from Part I.
// 3. Also write in a head tag a message like ‘Hi there at the frontend’
// 4. Your server should run on http://localhost:3000/

const http = require('http');

const server = http.createServer( (req,res) => {
    console.log('This is a server');
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h5>my module is:<br> ${c}<h5><br><h3> Hi there at the frontend</h3>`)
})

server.listen(3000)

//part III
// 1. Create a file named main.js and create a function that returns the current date and time. Export the module.
// 2. Use the exported module in a script.js file.
// 3. Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.
// 4. Your server should run on http://localhost:8080/

const http = require('http');
const date = require("./main.js")

const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h5>The date and time are currently: ${date.curdate}</h5>`)
})

server.listen(8080)