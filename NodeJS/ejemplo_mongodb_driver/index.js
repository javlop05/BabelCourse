'use strict';

const MONGO_DB = require('mongodb');

const MONGO_CLIENT = MONGO_DB.MongoClient;

MONGO_CLIENT.connect('mongodb://localhost:27017/cursonode', function(err, db) {
    if (err) {
        console.log('Error', err);
        process.exit(1);
    }

    // Recuperamos documentos de la coleccion agentes
    db.collection('agentes').find().toArray(function(err, datos) {
        if (err) {
            console.log('Error', err);
            process.exit(1);
        }

        datos.forEach(documento => {
            console.log(documento.name, documento.age);
        });

        db.close();
    });
});
