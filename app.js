// console.log(process.env.NODE_ENV);
// process.env.NODE_ENV = 'production';
// const name = require('./module');
// const http = require('http');

// console.log(process.env.NODE_ENV);
// require('dotenv').config();
// console.log(process.env.NODE_ENV);

// console.log('bonjour' + name);

// const exemple = require('./events/limite-callbacks_exemple');
// exemple.timer(undefined, undefined, () => console.log('3 secondes écoulées.'));

// const exemple = require('./events/eventEmitter_exemple');

// exemple.timer.on('3_secondes', () => console.log('3 secondes écoulées.'));
// exemple.launchTimer();

const url = require('url');
const express = require('express');
const app = express();
const mongoClient = require('mongodb');

require('./router').initRouter(app);

mongoClient.connect(
    "mongodb://localhost/test",
    {useUnifiedTopology: true},
    require('./handlers/mongoDb').connection
)

app.listen(8000);
