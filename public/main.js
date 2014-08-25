var main = function(argument){
	console.log('main');

	var grid = new Grid();
	grid.render($('#grid'));

	window.client=io.connect(window.location.href);

	client.on('pintar', function(data) {
		grid.pintar(data.x,data.y,data.color);
		
		/* Act on the event */
	});

}

$(document).on('ready',main)

