'use strict';

// Hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        //if (callback) callback();
        callback();
    }, 2000);
}

//Function ayudante para bucle en serie
function serie(arr, fn, callback) {
    if (arr.length == 0) {
        callback();
        return;
    }
    //quito el primer elemento del aray y se lo paso a la funcion
    fn(arr.shift(), function() {
        serie(arr, fn, callback);
    });
}

serie([1, 'hola', 3, 4, 5], escribeTras2Segundos, function() {
    console.log('fin');
});
