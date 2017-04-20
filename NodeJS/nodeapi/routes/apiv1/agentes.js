'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//Le pedimos a mongoose el modelo de agente
const Agente = mongoose.model('Agente');

const basicAuth = require('../../lib/basicAuth');

//router.use(basicAuth('admin', 'god'));

// GET /apiv1/agentes
router.get('/', basicAuth('admin', 'god'), (req, res, next) => {

    // Recogemos parámetros de búsqueda
    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const select = req.query.select;
    const sort = req.query.sort;

    const criterios = {};

    if (name) criterios.name = name;
    if (age) criterios.age = age;

    Agente.list(criterios, limit, skip, select, sort, (err, agentes) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: agentes });
    });
});

// GET /apiv1/agentes/:id
router.get('/:id', (req, res, next) => {
     const id = req.params.id;
     Agente.findOne({_id: id}).exec((err, agente) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: agente });
    });
});

// POST /apiv1/agentes
router.post('/', (req, res, next) => {
    const datosAgente = req.body;

    // Creo instacia de agente
    const agente = new Agente(datosAgente);

    // La guardo en la base de datos
    agente.save((err, agenteGuardado) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ sucess: true, result: agenteGuardado });
    });
});

// PUT /apiv1/agentes
router.put('/:id', (req, res, next) => {
    const datosAgente = req.body;
    const id = req.params.id;

    Agente.update({_id: id}, datosAgente, (err) => {
        if (err) {
            next(err);
            return;
        }
        res.json({sucess: true});
    });
});

// DELETE /apiv1/agentes
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Agente.remove({_id: id}, (err) => {
        if (err) {
            next(err);
            return;
        }

        res.json({success: true});
    });
});

module.exports = router;