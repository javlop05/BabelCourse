'use strict';

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean, 
    precio: Number,
    foto: String,
    tags: [String] 
});

anuncioSchema.statics.list = function(conditions, limit, skip,/* select,*/ sort, callback) {
    const query = Anuncio.find(conditions);

    // Limite de los resultados devueltos
    query.limit(limit)

    // Nos saltamos los primos skip resultados
    query.skip(skip);
    
    // Mostramos solo las columnas que nos interesen
    //query.select(select); // con {_id:0} no me saldria el id

    // Ordenamos por los campos dados
    query.sort(sort);

    // Ejecuto la query
    query.exec(callback);
}

var Anuncio = mongoose.model('Anuncio', anuncioSchema);