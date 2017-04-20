'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
    // recibimos credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    // buscamos el usuario en la base de datos
    Usuario.findOne({email}).exec((err, usuario) => {
        if (err) {
            next(err);
            return;
        }
        if (!usuario) {
            res.json({ success: false, error: 'Credenciales incorrectas'});
            return;
        }

        // comprobamos su clave
        if (usuario.clave !== clave) {
            res.json({ success: false, error: 'Credenciales incorrectas'});
            return;
        }

        // creamos un token JWT
        jwt.sign({ usuario_id: usuario._id }, 'jksdhfjkdhasjlhgjasdh', {
            expiresIn: '2d'
        }, (err, token) => {
            if (err) {
                next(err);
                return;
            }
             // se lo devolvemos 
            res.json({ sucess: true, token: token});
        });
    });
});

module.exports = router;