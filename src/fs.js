const fs = require('fs');

// We define the file name
const fileName = 'example.txt';

// Create file
fs.writeFileSync(fileName, 'Hello, this is an example file.');
console.log('File created successfully');

// Read
const content = fs.readFileSync(fileName, 'utf8');
console.log('File content:', content);

// Update
fs.appendFileSync(fileName, '\nThis is an appended line.');
console.log('File updated successfully');

// Delete
fs.unlinkSync(fileName);
console.log('File deleted successfully');