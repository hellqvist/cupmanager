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

// Socket.IO part
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('New client connected!');
	socket.on('signIn', function(data) {
	    console.log('E-mail: ' + data.email);
	    console.log('Password: ' + data.password);
	});
});