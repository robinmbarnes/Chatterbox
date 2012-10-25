var clients = {};
var io = require('socket.io').listen(7337);

io.sockets.on('connection', function (socket) {

  socket.on('login', function (username) {
		login(socket, username);
	});

	socket.on('disconnect', function() {
		logout(socket);
	});

	socket.on('logout', function() {
		logout(socket);
	});

  socket.on('message', function (msg) {
		message(socket, msg);
  });

});

function login(socket, username)
{
	if(clients[username] != undefined)
	{
		socket.emit('error', 'Username is already taken');
		return;	
	}
	clients[username] = socket;
	socket.set('username', username, function(){
		socket.emit('ready');
	});
}

function logout(socket)
{
    socket.get('username', function (err, username) {
			if(clients[username] != undefined)
			{
				socket.set('username', '', function() {
					delete clients[username];
      		io.sockets.emit('logout', { username: username });
				});
			}
    });
}

function message(socket, msg)
{
    socket.get('username', function (err, username) {
      io.sockets.emit('message', {message: msg, username: username});
    });
}
