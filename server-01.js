var express = require('express');

var app = express();

var mensajes = [],
	peticionesPendientes=[];

app.get('/',function(req,res){
	res.send('hola mundo');
});	

app.get('/mensajes/new/:mensaje', function(req,res){
	mensajes.push(req.params.mensaje);
	
	peticionesPendientes.forEach(function(res){
		res.send(mensajes+'<script>window.location.reload()</script>');
	});
	res.send('tu mensaje fue: ' + req.params.mensaje);
});

app.get('/mensajes/list',function(req,res){
	peticionesPendientes.push(res);
});

app.listen(3000);

console.log("Express server esta corriendo en \n => http://localhost:3000/\n");