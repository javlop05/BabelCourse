'use strict';

const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: {
        type: String,
        unique: true,
        index: true
    },
    clave: String 
});

mongoose.model('Usuario', usuarioSchema);