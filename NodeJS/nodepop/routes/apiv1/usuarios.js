'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken');
const config = require('../../config');

//Hashing the password with bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const clave = req.body.clave;

  if (!email || !clave) {
    res.json({ success: false, error: 'Debes rellenar los campos de login' });
  }

  Usuario.findOne({ email }).exec((err, userFound) => {

    console.log(userFound);

    if (err) {
      next(err);
      return;
    }

    if (!userFound) {
      console.log('Usuario no encontrado');
      res.json({ success: false, error: 'Datos incorrectos' });
    }

    bcrypt.compare(clave, userFound.clave)
      .then(res => {

        if (!res) {
          console.log('La clave no coincide');
          res.json({ success: false, error: 'Datos incorrectos' });
        }

        jwt.sign({ usuario_id: userFound._id }, config.jwtSecret, config.jwtConfig,
          (err, token) => {
            console.log(err);
            if (err) {
              next(err);
              return;
            }
            console.log('ey');
            res.json({ success: true, token });
            console.log('hola');
          });
      });
  });
});

router.post('/registro', (req, res, next) => {

  const email = req.body.email;
  const unhashedClave = req.body.clave;
  const nombre = req.body.nombre;

  bcrypt.hash(unhashedClave, saltRounds)
    .then(hash => {
      const newUser = new Usuario({ email, clave: hash, nombre });
      newUser.save((err, user) => {
        if (err) {
          next(err);
          return;
        } else {
          res.json({ success: true, user });
        }
      });
    });
});

module.exports = router;
