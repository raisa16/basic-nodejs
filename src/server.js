const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Jolie!");
});

server.listen(3000, "localhost", () => {
  console.log("Server running...");
});

//node --watch src/server.js