require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		jquery: 'lib/jquery/jquery',
		socket: 'lib/socket.io-client/socket.io'
	},
	shim: {
	}
})

require([
	'template',
	'socket',
	'jquery'
], function (template, io, jquery) {
	'use strict';
	console.log(io);
	console.log(template);
	console.log(jquery);
	// var socket = io('http://localhost');
	// socket.on('news', function (data) {
	// 	console.log(data);
	// 	// socket.emit('my other event', { my: 'data' });
	// 	var s = 1;
	// 	sendMessage(socket,s);
	// });
	// socket.on('event', function (e) {
	// 	console.log(e);
	// });
	// socket.on('disconnect', function () {
	// 	console.log("this socket server is disconnect!!!");
	// });

	// function sendMessage(socket,s) {
	// 	s++;
	// 	socket.emit('my other event', { my: 'data' ,s:s});
	// 	setTimeout(function () {
	// 		sendMessage(socket,s);
	// 	}, 1000);
	// }
})