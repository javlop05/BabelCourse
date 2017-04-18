'use strict';

// Hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        //if (callback) callback();
        callback();
    }, 2000);
}

/*escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2');
});
*/

/*escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2', function() {
        console.log('Fin');
    });
});*/

//Se ejecuta en paralelo
/*for (let i = 0; i < 5; i++) {
    escribeTras2Segundos('texto' + i, function() {

    });
}*/

//Function ayudante para bucle en serie
function serie(veces, fn, callback) {
    if (veces == 0) {
        callback();
        return;
    }
    veces--;
    fn(veces, function() {
        serie(veces, fn, callback);
    });
}

serie(5, escribeTras2Segundos, function() {
    console.log('fin');
});
