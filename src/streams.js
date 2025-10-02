const fs = require("fs");

const readableStream = fs.createReadStream("./src/eloquent_js.pdf",{encoding:"utf-8"});
const writableStream = fs.createWriteStream("output.txt");

readableStream.on("data", (chunk) => {
  console.log("Chunk:", chunk.toString());
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("Termino la lectura del archivo");
  writableStream.end();
});

readableStream.on("error", (err) => {
    console.error("Error en la lectura del archivo", err);
});

writableStream.on("error", (err) => {
    console.error("Error en la escritura del archivo", err);
});