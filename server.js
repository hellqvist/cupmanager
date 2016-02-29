var path = require('path');
var fs = require('fs');
var express = require('express');

// Server part
var app = express();
var defaultAddress = path.join(__dirname, 'public');
app.use(express.static(defaultAddress));
//app.use('/manage', express.static(defaultAddress));
//app.use('/view', express.static(path.join(defaultAddress, 'view.html')));

var server = app.listen(process.env.PORT);




/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);*/