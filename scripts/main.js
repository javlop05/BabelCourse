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


/*setTimeout(function() {
    alert('go!');
}, 2000);*/

//clearTimeout

/*(function() {
    console.log(1);
    setTimeout(function() { console.log(2) }, 1000);
    setTimeout(function() { console.log(3) }, 0);
    console.log(4);
})();

Muestra 1,4,3,2
*/

/*for (var i = 0; i < 5; i++) {
    setTimeout(
        (function(i) {
            return function() {
                console.log(i);
            };
        })(i), i * 1000);
}

$('button').click(function(event) {
    console.log(event);
    $('nav a').css('color', 'green');
    $(this).css('color', 'red');
    $(event.target).css('color', 'red');
});


$('.nav-item a').mouseover(function() {
    console.log($(this).attr('href'));
});*/

/*
$(document).scroll(function() {
    requestAnimationFrame(function() {
        $('header').css('top', window.superCalculus);
    });
});
*/

//var root = 'http://jsonplaceholder.typicode.com';

/*$.ajax({
    url: root + '/posts/1',
    method: 'GET'
}).then(function(data) {
    console.log(data);
});*/

/*var promise = $.ajax({
    dataType: 'json',
    url: root + '/posts/1',
    method: 'GET'
});

promise.then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
});*/
/*
var promises = [];

for (var i = 1; i < 11; i++) {
    var promise = $.ajax({
        dataType: 'json',
        url: root + '/posts/' + i,
        method: 'GET'
    });
    promises.push(promise);
}

Promise.all(promises).then(function(responses) {
    var html = responses.reduce(function(total, response, index, list) {
        return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
    }, '');
    $('#about-us').append(html);
}).catch(function() {
    console.log(arguments);
});

Promise.race(promises).then(function() {
    //first with finished
}).catch(function() {
    //first with error
});

var promise1 = $.ajax({
    dataType: 'json',
    url: root + '/posts/1',
    method: 'GET'
});

var promise2 = $.ajax({
    dataType: 'json',
    url: root + '/posts/2',
    method: 'GET'
});

var promise3 = $.ajax({
    dataType: 'json',
    url: root + '/posts/3',
    method: 'GET'
});

promise2.catch(function() {
    //promise2 error
});
promise3.catch(function() {
    //promise3 error
});


function doStuff() {
    promise1.then(function() {
        return promise2;
    }).then(function() {
        return promise3;
    }).then(function() {
        //your code
        return 43;
    }).catch(function() {
        //handle error
    });
}

var quickPromise = Promise.resolve(true);

quickPromise.then(function(response) {
    return response ? 10 : 0;
}).then(function(response) {
    return response > i ? {} : [];
});

/*function login(username, password, provider) {
    login('facebook').then(function(responseFB) {
        return loginOauth(responseFB);
    }).then(function(responseOauth) {
        return loginWithServer(responseOauth);
    }).then(function(response) {
        return setLoggedIn(response);
    }).then(function() {
        return getLoggedInUser();
    });
}

doStuff().then(function() {
    //43
});*/
/*
var createdPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //do stuff
        resolve('magic');
    }, 5000);
});

createdPromise.then(function(response) {
    //'magic'
})*/

var data = {
    'userId': 1,
    'title': 'My post',
    'body': 'post body'
};

var promise = $.ajax({
    return services.getPosts(1);
}).then(function(response) {
    console.log('POST', response);

}).catch(function(error) {
    console.log('POST', error);
});
