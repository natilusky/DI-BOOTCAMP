let http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is my first response <br>This is my second response </h1><h3>This is my third response</h3>');
}).listen(3000)
