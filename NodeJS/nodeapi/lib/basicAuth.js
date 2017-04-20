'use strict';

const basicAuth = require('basic-auth');

//Este modulo exporta una funcion que recibe usuario y password
module.exports = (usuario, password) => {
    //la funcion devuelve un middleware de autenticaciones
    return (req, res, next) => {
        //pedimos a basicAuth que intente sacar credenciales
        const user = basicAuth(req);
        console.log({user});
        if(!user || user.name !== usuario || user.pass != password) {
            // Si no tengo credenciales, respuesta con cabecera pidiendolas
            res.set('WWW-authenticate', 'Basic realm=Authorization Required');
            res.sendStatus(401);
            return;
        }
        next();
    };
};