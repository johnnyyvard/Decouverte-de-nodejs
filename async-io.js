// Sync
// function doSomething_sync() {
//     let data = getUserDetails_sync();
//     console.log(data);
//     console.log('Disponible');
// }

// function getUserDetails_sync() {
//     const timout = Date.now() + 2000;
//     while (Date.now() < timout) { };
//     return 'Elise';
// }

// doSomething_sync();

// Async
// function doSomething_async() {
//     getUserDetails_async((data) => console.log(data));
//     console.log('Disponible');
// }

// function getUserDetails_async(callback) {
//     setTimeout(() => callback('Elise'), 2000);
// }

// doSomething_async();

const fs = require('fs');

function generateData() {
    let data = '1';
    for (i=0; i < 1000000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}

function callback() {
    console.log('Process \'bigfile\' treminé, durée ' + (Date.now() - date) + ' ms.')
}

fs.writeFile('bigfile', generateData(), callback)
const date = Date.now();
console.log('Disponible.');
