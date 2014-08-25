// JavaScript Document
//mejorando.la/node.js/servidor.js
var cvanderito = require("socket.io").listen(6969);

cvanderito.sockets.on("connection", arranque);

function arranque(usuario)
{
	usuario.on("nuevoNombre", emitir);
}
function emitir(data)
{
	cvanderito.sockets.emit("nombreDesdeServidor",
							data + "*");
}
//res.send(mensajes + '\n' +'<script>setTimeout(function(){window.location.reload()},5000) </script>' );
