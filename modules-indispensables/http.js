
const http = require('http');
const url = require('url');

function handleRequest(req, res) {
    const parseUrl = new url(req.url);
    if ('/' === parseUrl.path) {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('Bonjour.');
    }
}

const server = http.createServer(handleRequest);
server.listen(8000);