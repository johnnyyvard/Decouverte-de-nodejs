const fs = require('fs');
const path = '../bigfile';

// Asynchrones
// fs.readFile(path, callback);
// fs.writeFile(path, callback);
// fs.copyFile(path, callback);

// Streams
// fs.createReadStream(path);
// fs.createWriteStream(path);

// Stats
// fs.stat(path);

function readAndDisplayProgress(err, stats) {
    const stream = fs.createReadStream(path);
    stream.on("data", () => console.log('Lu ' + stream.bytesRead / stats.size * 100 + '%'));
}

fs.stat(path, readAndDisplayProgress);
// fs.createReadStream();