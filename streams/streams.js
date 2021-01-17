const fs = require('fs');
const writeFileStream = fs.createWriteStream('bigfile');

process.stdin.setEncoding('utf8');
process.stdin.on("data", pipeToWriteStream);
// process.stdin.on("pause", () => console.log('Terminé.'));

// function evaluate(input) {
//     input.includes('pause') ? process.stdin.pause(): console.log(input);
// }

function pipeToWriteStream(input) {
    writeFileStream.write(input);
}