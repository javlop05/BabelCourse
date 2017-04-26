'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        const error = new Error('Necesitas un token de autenticacion'); 
        error.status = 401;
        next(error);
        return;
    }

    jwt.verify(token, config.jwtSecret, function(err, tokenDecoded) {
        if (err) {
            const error = new Error('El token no es valido');
            error.status = 401;
            next(error);
            return;
        }
        
        req.usuario_id = tokenDecoded.usuario_id;
        next();
    });
};