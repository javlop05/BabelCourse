var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

/* GET /apiv1/anuncios . */
router.get('/', function (req, res, next) {

    const tag = req.query.tag;
    const venta = req.query.venta;
    const nombre = req.query.nombre;
    const precio = req.query.precio;
    const start = parseInt(req.query.start);
    const limit = parseInt(req.query.limit);
    const sort = parseInt(req.query.sort);
    //const select = req.query.select;

    const conditions = {};
    
    if (tag) conditions.tag = tag;
    if (venta) conditions.venta = venta;
    if (nombre) conditions.nombre = nombre;
    if (precio) {
        let condArray = precio.split("-");
        if (condArray.length > 2) {
            let error = new Error('Error en el rango del precio solicitado');
            next(err);
            return;
        } else if (condArray.length > 1) {
            const precioCond = {};
            if (condArray[0]) precioCond.$gte = parseInt(condArray[0]);
            if (condArray[1]) precioCond.$lte = parseInt(condArray[1]);
            conditions.precio = precioCond;
        } else {
            conditions.precio = parseInt(precio);
        }
        console.log(conditions.precio);
    }

    Anuncio.list(conditions, limit, start, sort, (err, anuncios) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: anuncios });
    });
});

module.exports = router;
