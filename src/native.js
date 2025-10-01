const fs = require('fs');

const data = fs.readFileSync('src/example.txt', 'utf8');
console.log('File content: ', data);