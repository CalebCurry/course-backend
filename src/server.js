const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        console.log(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.end(data);
    } catch (err) {
        console.log('error', err.message);
        res.statusCode = 500;
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
