// console.log(process.env.NODE_ENV);
// process.env.NODE_ENV = 'production';
const name = require('./module');
const http = require('http');

console.log(process.env.NODE_ENV);
require('dotenv').config();
console.log(process.env.NODE_ENV);

// console.log('bonjour' + name);