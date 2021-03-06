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

// const url = require('url');
require('dotenv').config()
const express = require('express');
const app = express();
// const mongoClient = require('mongodb');
const mongoose = require('mongoose');

require('./router').initRouter(app);

// const userRepo = require('./repository/user');
// userRepo.saveUser();

mongoose.connect(process.env.mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});

// mongoClient.connect(
//     // "mongodb://localhost/test",
//     {useUnifiedTopology: true},
//     require('./handlers/mongoDb').connection
// )

app.listen(8000);
