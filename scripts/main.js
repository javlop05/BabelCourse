console.log('Hello from file');

var hello = {
    pepe: true,
    juan: 'ok'
};

console.log(hello);

//confirm('tu ordenador no es seguro');

/**
 * This function does magic stuff
 * @param  {Number} Este es un tipo number
 * @param  {String}
 * @param  {Object}
 * @param {Array}
 * @return {Mixed} returns a magic thing
 */
function pepe(arg1, arg2, arg3) {}

/**
 * functionNameLikeThis
 * variableNameLikeThis
 * _internalVariablesLikeThis
 * CONSTANT_EXAMPLE
 */


var compra = ['leche', 'pan', 'galletas', 'cerveza', 'carne', 'arroz', 'verdura'];

function listarCompra() {
    compra.forEach(function(elementoCompra, index) {
        console.log(elementoCompra);
    });
};


function quitarGluten() {
    compra = compra.filter(function(elementoCompra, index) {
        return (elementoCompra !== 'pan');
    });
};

/*function quitarGluten2() {
    var result = [];
    compra.forEach(function(elementoCompra) {
        if (elementoCompra !== 'pan') {
            result.push(elementoCompra);
        }
    });
    return result;
}*/

quitarGluten();
console.log(compra);

var fecha = '2017/5/12';
var fechaNumbers = fecha.split('/').map(function(item) {
    return parseInt(item);
});

console.log(fechaNumbers);

var cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ut ullam error inventore dolore doloribus!';
console.log(cadena.slice(5, 3));


var obj = {
    nombre: 'Pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '1';
    }
};

obj.nombre
obj.saludo
obj["saludo"]();
var fn = obj["saludo"];

//Devuelve Hola, undefined1 ya que tiene contexto global
fn();

//Devuelve Hola, Pepito1 ya que fijamos el contexto a obj
fn.call(obj); //Otra positibilidad es fn.bind(obj)()


/*var compraListNodeVirtual = document.createElement('ul');
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    compraListNodeVirtual.appendChild(a);
});
compraListNode.appendChild(compraListNodeVirtual);*/


// kebap-case-style
// lowerCamelCase
// UpperCamelCase

var array = document.querySelectorAll('.nav a');

var newArray = Array.prototype.slice.call(array, 0);

newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray() {
    //En este caso arguments es un object, hay que hacer tambien:
    //Array.prototype.slice.call(array, 0);
    console.log(arguments);
}

argumentsArray(1, 2, 4, "prueba");
