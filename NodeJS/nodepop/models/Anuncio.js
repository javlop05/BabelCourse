'use strict';

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        index: true
    },
    venta: {
        type: Boolean, 
        required: true,
        index: true
    },
    precio: {
        type: Number,
        required: true,
        index: true
    },
    foto: String,
    tags: {
        type: [String], 
        enum: ['work', 'lifestyle', 'motor', 'mobile'],
        index: true
    }
});

anuncioSchema.statics.list = function(conditions, limit, skip, sort, select, callback) {
    const query = Anuncio.find(conditions);

    // Limite de los resultados devueltos
    query.limit(limit);

    // Nos saltamos los primos skip resultados
    query.skip(skip);

    //Devolvemos solos los campos solicitados
    query.select(select);

    // Ordenamos por los campos dados
    query.sort(sort);

    // Ejecuto la query
    query.exec(callback);
};

var Anuncio = mongoose.model('Anuncio', anuncioSchema);