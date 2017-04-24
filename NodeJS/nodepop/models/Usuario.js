'use strict';

const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String 
});

mongoose.model('Usuario', usuarioSchema);