'use strict'

// Creamos un constructor de objetos
function Fruta() {
    let nombre; //No hace hoisting
    this.setNombre = function(value) {
        nombre = value;
    };
    this.getNombre = function() {
        return nombre;
    };
}

//Creamos objeto fruta
const fruta = new Fruta();

fruta.setNombre('Limón');

console.log(fruta, fruta.getNombre());
