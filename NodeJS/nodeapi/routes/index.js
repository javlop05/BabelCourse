var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const segundo = (new Date()).getSeconds();

    res.render('index', {
        title: 'NodeApi',
        textoSinEscapar: '<p>sin escapar</p><script>alert("Cuidadito!")</script>',
        condicion: {
            segundo: segundo,
            estado: segundo % 2 == 0
        },
        usuarios: [
            { nombre: 'Smith' },
            { nombre: 'Jones' }
        ]
    });
});

//Parametros en la ruta
///parametro opcional por lo que no entraria a la de abajo si no se pone
///si no que entraria siempre en esta ya que el orden de rutas importa!
////router.get('/parametros/:id?'
router.get('/parametros/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(req.params);
    res.send('ok');
});

router.get('/parametros/piso/:piso/puerta/:puerta', function(req, res, next) {
    console.log('req.params', req.params);
    res.send('varios params');
})

//Parametros en la query-string http://localhost:3000/?variable=valor&variable2=Valor
router.get('/parametros', function(req, res, next) {
    console.log('req.query', req.query);
    res.send('ok con query');
});

//parametros en el body
router.post('/parametros', function(req, res, next) {
    console.log('req.body', req.body);
    res.send('ok, recibido post');
});

module.exports = router;
