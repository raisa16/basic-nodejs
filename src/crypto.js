const crypto = require('crypto');
const text = "Secret Message";

// Hashing example
const hash = crypto.createHash('sha256').update(text).digest('hex');
console.log(`SHA-256 Hash: ${hash}`);
console.log(`original text: ${text}`);