var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // change the to 'text/plain' to 'text/html' it will work as your index page
    res.end(index);
}).listen(8080);