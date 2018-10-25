var server = require('http');
var fs = require('fs');
var serverFunction = function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	try {

		// fs.readFile('my-file.txt', 'utf8', function (error, fileData) {
		// 	console.log(fileData);
		// });
		var data = fs.readFileSync('Readme.txt', 'utf8');
		response.end(data);
	} catch (e) {
		console.log('Error:', e.stack);
	}
}
server.createServer(serverFunction).listen(3001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3001/');