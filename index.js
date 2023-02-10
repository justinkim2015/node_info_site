const http = require("http");
const axios = require("axios");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const index = fs.readFile("index.html", (err, data) => {
  if (err) throw err;
  return data
});

console.log(index)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
