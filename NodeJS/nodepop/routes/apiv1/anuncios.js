'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');
const jwtAuth = require('../../lib/jwtAuth');

// JSON Web Token
router.use(jwtAuth);

/* GET /apiv1/anuncios . */
router.get('/', (req, res, next) => {

    const tags = req.query.tags;
    const venta = req.query.venta;
    const nombre = req.query.nombre;
    const precio = req.query.precio;
    const start = parseInt(req.query.start);
    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;

    //Posible error si en el precio 
    const conditions = createCondition(tags, venta, nombre, precio);

    Anuncio.list(conditions, limit, start, sort, (err, anuncios) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: anuncios });
    });
});

// Funcion que crea la condicion de busqueda
function createCondition(tags, venta, nombre, precio) {
    const conditions = {};
    
    if (tags) {
        const condTagArray = tags.split(',');
        const inCond = {};
        inCond.$in = condTagArray;
        conditions.tags = inCond;
    }


    if (venta) conditions.venta = venta;


    if (nombre) {
        const nameExp = new RegExp('^' + nombre, 'i');
        const regCond = {};
        regCond.$regex = nameExp;
        conditions.nombre = regCond;
    }


    if (precio) {
        const condPrecioArray = precio.split('-');
        if (condPrecioArray.length > 1) {
            const precioCond = {};
            if (condPrecioArray[0]) precioCond.$gte = parseInt(condPrecioArray[0]);
            if (condPrecioArray[1]) precioCond.$lte = parseInt(condPrecioArray[1]);
            conditions.precio = precioCond;
        } else {
            conditions.precio = parseInt(precio);
        }
    }

    return conditions;
}

module.exports = router;
