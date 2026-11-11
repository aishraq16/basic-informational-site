import http from 'http';

const server = http.createServer((req, res) => {

    switch(req.url) {
        case "/":
            console.log("redirecting to index.html");
            res.writeHead(302, {'Location' : "/index.html"})
            res.end()
            break;
        case "/about":
            console.log("redirecting to about");
            res.writeHead(302, {'Location' : "/about.html"})
            res.end()
            break;
        case "/contact-me":
            res.writeHead(302, {'Location' : "/contact-me.html"})
            res.end()
            break;
        default:
            console.log("redirecting to 404");
            res.writeHead(302, {'Location' : "/404.html"})
            res.end()
    }
})

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
})