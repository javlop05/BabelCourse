'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('error', (err) => {
    console.log('Error', err);
});

conn.once('open', function() {
    console.log('Connected to mongodb.');
});

mongoose.connect('mongodb://localhost/nodepop');