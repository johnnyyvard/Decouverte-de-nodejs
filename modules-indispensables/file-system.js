const fs = require('fs');
const path = '../bigfile';

// Asynchrones
fs.readFile(path, callback);
fs.writeFile(path, callback);
fs.copyFile(path, callback);

// Streams
fs.createReadStream(path);
fs.createWriteStream(path);

// Stats
fs.stat(path);