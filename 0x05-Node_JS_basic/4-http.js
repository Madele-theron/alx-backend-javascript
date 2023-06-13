const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
});

module.exports = app;
