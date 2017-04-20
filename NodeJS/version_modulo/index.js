'use strict';

const fs = require('fs');
const async = require('async');

//require usa una ruta relativa a este fichero
const versionModulo = require('./versionModulo');

function versionModulos(callback) {

    //Esta ruta es relativa a la raiz del proyecto
    fs.readdir('./node_modules', function(err, lista) {
        if (err) {
            callback(err);
            return;
        }

        //Para cada string de la lista ejecutamos versionModulo
        //concat recibe un array, la funcion a ejecutar con cada elemento
        //y un callback final
        async.concat(lista,
            function iterador(elemento, callbackIterador) {
                if (elemento === '.bin') {
                    callbackIterador(null);
                    return;
                }
                versionModulo(elemento, function(err, version) {
                    if (err) {
                        callbackIterador(err);
                        return;
                    }

                    callbackIterador(null, { version, modulo: elemento });
                });
            },
            callback);
    });
}


versionModulos(function(err, datos) {
    if (err) {
        console.log('Hubo un error', err);
        return;
    }

    console.log('Los modulos son', datos);
});
