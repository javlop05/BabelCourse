'use strict';

//Inmediated invoked function

(function() {
    document.querySelector('#team .caption').addEventListener('click',
        function() {
            console.log(this);
        }
    );

    document.querySelector('#team .caption p').addEventListener('click',
        function() {
            console.log(this);
        }
    );

    /*
     En la consola se muestra el mas profundo primero debido al burbujeo

    <p>…</p>
    <div class="caption">…</div>

    Si ponemos el true el patrón cambia de burbujeo de eventos a captura de eventos
    Captura: En el primero que lo capture lo voy lanzando hacia dentro
    Burbujeo (Por defecto): viaja hasta lo más profundo y va saliendo

    document.querySelector('#team .caption p').addEventListener('click',
        function() {
            console.log(this);
        }
    ,true);

    */
    /*
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function() {
            console.log(i);
        });

        document.body.appendChild(btn);
    }*/

    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', (function(i) {

            return function() {
                console.log(i);
            };

        })(i));

        document.body.appendChild(btn);
    }
});
