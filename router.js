function initRouter(app) {
    app.get('/', (req, res) => {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('Bonjour.');
    });    
}

exports.initRouter = initRouter;
