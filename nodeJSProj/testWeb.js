const url = require('url');
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	var q = url.parse(req.url, true);
	var filename = "."+q.pathname;
	fs.readFile(filename, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
		}
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write(data);
		res.end();
	});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
