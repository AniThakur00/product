const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from product. TESTING 7. container port - 3000, service port - 80.\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
