const bufferFromString = Buffer.from('Hello Jolie', 'utf8');
console.log(bufferFromString);

// crear un buffer de un tamaño especifico
const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

// Escribir datos dentro de un bloque
bufferAlloc.write('node.js');
console.log(bufferAlloc);

// Leer los datos de buffer y convertirlo en cadena
const buffertoString = bufferAlloc.toString('utf8', 0, 6);
console.log(buffertoString);