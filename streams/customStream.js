const stream = require('stream');
const fs = require('fs');

class GenerateDataStream extends stream.Readable {

    constructor(iterationNumber) {
        super();
        this._iterationNumber = parseInt(iterationNumber);
        this._index = 0;
    }
    _read() {
        const i = this._index++;
        if (i > this._iterationNumber)
            this.push(null);
        else {
            const string = ' ' + Math.random() * 10;
            const buffer = Buffer.from(string);
            this.push(buffer); 
        }
    }
}

const dataStream = new GenerateDataStream(40000000);
const writeStream = fs.createWriteStream('../bigfile');

dataStream.pipe(writeStream);

function callback(starDate) {
    return () => console.log('Process \'bigfile\' terminé, durée ' + (Date.now() - starDate) + ' ms.')
}
writeStream.on('finish', callback(Date.now()));