'use strict';

const mongoose = require('mongoose');

// Creamos un esquema

const agenteSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        index: true
    }
});

// creamos método estático en el modelo
// para recuperar lista de agentes con filtros
agenteSchema.statics.list = function(criterios, limit, skip, select, sort, callback) {
    const query = Agente.find(criterios);

    // Limite de los resultados devueltos
    query.limit(limit)

    // Nos saltamos los primos skip resultados
    query.skip(skip);
    
    // Mostramos solo las columnas que nos interesen
    query.select(select); // con {_id:0} no me saldria el id

    // Ordenamos por los campos dados
    query.sort(sort);

    // Ejecuto la query
    query.exec(callback);
}

// Creamos el modelo de Agente
var Agente = mongoose.model('Agente', agenteSchema);

// para evitar la pluralizacion
//mongoose.model('Agente', agenteSchema, 'ZZZ');

// No necesitamos exportar el modelo porque
// podemos recuperarlo donde queramos con
// mongoose.model('Agente')