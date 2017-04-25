'use strict';

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean, 
    precio: Number,
    foto: String,
    tags: [String] 
});

anuncioSchema.statics.list = function(conditions, limit, skip, sort, callback) {
    const query = Anuncio.find(conditions);

    // Limite de los resultados devueltos
    query.limit(limit)

    // Nos saltamos los primos skip resultados
    query.skip(skip);

    // Ordenamos por los campos dados
    query.sort(sort);

    // Ejecuto la query
    query.exec(callback);
}

var Anuncio = mongoose.model('Anuncio', anuncioSchema);