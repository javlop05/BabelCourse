'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

const persona = new Persona('Neo');


//Asignamos un método al prototipo de todas las personas
Persona.prototype.saluda = function() {
    console.log('Hola me llamo', this.nombre);
}

persona.saluda();

// ------------- HERENCIA

function Agente(nombre) {
    Persona.call(this, nombre);
    //Esto ejecuta el constructor de personas con el this de agente
}

//Asignamos como prototipo una persona
Agente.prototype = new Persona('Soy un prototipo');

const agente = new Agente('Smith');

agente.saluda();
