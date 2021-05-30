const fs = require('fs')

fs.readFile('./right-left.txt', (err, data) => {
    if (err) {
        console.log(err);
    }else{
        console.log(data.toString());
    }
})