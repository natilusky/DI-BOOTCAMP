let http = require('http');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
}).listen(8080)