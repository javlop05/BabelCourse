'use strict';

const fs = require('fs');
const path = require('path');

//funcion que lee la version del modulo
function versionModulo(nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    fs.readFile(fichero, 'utf-8', function(err, datos) {
        if (err) {
            callback(err); //Llamamos al callback con el error
            return;
        }

        const packageJson = JSON.parse(datos);

        //Llamamos al callback con el dato que nos pidieron
        callback(null, packageJson.version);
    });
}

// Llamamos a la funcion
/*versionModulo('chance', function(err, version) {
    if (err) {
        console.log('Error!', err);
        return;
    }

    console.log('La version de chance es: ', version);
});
*/

module.exports = versionModulo;
