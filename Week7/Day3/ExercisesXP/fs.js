// Exercises XP
// Exercise 1 : Reading From A File In Node.JS
// Instructions
// 1. Create a text file and write something inside (example: ‘Some Text To See’)
// 2. Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require('fs');

fs.readFile('./text.txt' , (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data.toString())
  })

//  Exercise 2 : Writing Files With Node JS
// Instructions
// 1. Create an fs.js file, and use the Node js File System to create a new text file and write to it.

  fs.writeFile('./data.txt', 'Netanel lusky', err => {
    if (err) throw err;
  });


// Exercise 3 : Appending And Deleting Files With Node JS
// Instructions
// 1. Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)

fs.writeFile('./data3.txt', 'Buy Milk', err => {
    if (err) throw err;
  });

  fs.appendFile('./data3.txt', '\nBuy orange juice', err => {
    if (err) throw err;
  });

  fs.unlink('./data3.txt', err => {
    if (err) {
      console.log(err);
    }
  });