
// const http = require('http');
const url = require('url');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, '', {'Content-Type': 'text/plain'});
    res.end('Bonjour.');
});

app.listen(8000);

// function handleRequest(req, res) {
//     const parseUrl = url.parse(req.url);
//     if ('/' === parseUrl.path) {
//         res.writeHead(200, '', {'Content-Type': 'text/plain'});
//         res.end('Bonjour.');
//     }
// }

// const server = http.createServer(handleRequest);
// server.listen(8000);