var http = require('http');

function start(){
	function onRequest(req,res){
		res.writeHead(200,{"Content-Type": "text/plain"});
		res.write('Hello World');
		res.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('Server Has Started');
}

exports.start = start;
=======
/*var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello!');
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');
*/
/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

	fs.readFile('index.html', function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);

	});

        
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');

*/

