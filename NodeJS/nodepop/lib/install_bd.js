'use strict';

//ruta relativa desde donde estas
const mongoose = require('mongoose');

const fs = require('fs');

require('./mongooseConnect');
require('../models/Usuario');
require('../models/Anuncio');

//Pedimos a mongoose el modelo de usuario
const Usuario = mongoose.model('Usuario');

//Pedimos a mongoose el modelo de anuncion
const Anuncio = mongoose.model('Anuncio');


//Eliminamos los docs
function eliminarUsuarios() {
    return new Promise(function (resolve, reject) {
        Usuario.remove(err => {
            if (err) reject(err);
            console.log('Usuarios eliminados correctamente');
            resolve();
        });
    });
}

function eliminarAnuncios() {
    return new Promise(function (resolve, reject) {
        Anuncio.remove(err => {
            if (err) reject(err);
            console.log('Anuncios eliminados correctamente');
            resolve();
        });
    });
}

//ruta relativa desde el inicio del proyecto
//var path = require('path');
//fs.readFile(path.join(__dirname, 'anuncios.json'), (
function cargarDatos() {

    return new Promise(function (resolve, reject) {

        fs.readFile('./lib/anuncios.json', (err, data) => {

            if (err) reject(err);

            const anuncios = (JSON.parse(data)).anuncios;

            for (let i = 0; i < anuncios.length; i++) {
                let anuncio = new Anuncio(anuncios[i]);
                anuncio.save((err, anuncioCreado) => { 
                    if (err) {
                        console.log('Error:', err);
                        reject(err);
                    }
                    console.log('Anuncio ' + anuncioCreado.nombre + ' creado');
                });
            }

            resolve();
        });
    });
}

eliminarUsuarios()
    .then(eliminarAnuncios)
    .then(cargarDatos)
    .catch(err => {
        console.log('Error', err);
    })
    .then(() => {
        mongoose.connection.close();
    });