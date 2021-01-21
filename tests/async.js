const fs = require('fs');

function asyncData(callback) {
    setTimeout(() => callback('Bonjour'), 1000)
}

exports.asyncData = asyncData;