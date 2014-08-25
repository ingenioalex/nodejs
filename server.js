var express = require('express'),
	app     = express(),
	server  = require('http').createServer(app),
	io      = require('socket.io').listen(server),
	cons    = require('consolidate');

server.listen(3000);

app.engine('.html', cons.jade);
app.set('view engine','html');

app.use(express.static('./public'));

app.get('/', function(req,res){
	res.render('index',{
		titulo : "Hola como estas"
	});
});

io.sockets.on('connection', function(socket) {

	socket.on('pintar',  function(data) {
		socket.broadcast.emit('pintar',data);
		/* Act on the event */
	});
	/* Act on the event */
});

console.log("Express server esta corriendo en \n => http://localhost:3000/\n");
