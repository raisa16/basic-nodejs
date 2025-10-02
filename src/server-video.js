const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const videoPath = path.join(__dirname, "./video.mp4");
    const stat = fs.statSync(videoPath);
    
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size,
    });
    
    const readStream = fs.createReadStream(videoPath);

    readStream.on('data', (chunk) => {
        console.count('chunks');
        console.log(`size: ${chunk.length}`);
  });
  readStream.pipe(res);
}   else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Not found');
  }
});
server.listen(3000, "localhost", () => {
  console.log("Server running on http://localhost:3000");
});