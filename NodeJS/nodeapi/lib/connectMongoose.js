'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connection = mongoose.connection;

connection.on('err', (err) => {
    console.log('Error de conexion', err);
    process.exit(1);
});

connection.once('open', () => {
    console.log('Conectado a mongoDB');
});

// Realizamos la conexion, no es necesario exportarla ya que mongoose la realiza por nosotros

mongoose.connect('mongodb://localhost/cursonode');