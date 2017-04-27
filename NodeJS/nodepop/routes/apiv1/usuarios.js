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
    const err = new Error('Debes rellenar los campos de login');
    next(err);
    return;
  }

  Usuario.findOne({ email }).exec((err, userFound) => {

    console.log(userFound);

    if (err) {
      next(err);
      return;
    }

    if (!userFound) {
      const err = new Error('Datos incorrectos');
      next(err);
      return;
    }

    bcrypt.compare(clave, userFound.clave)
      .then(iguales => {

        if (!iguales) {
          const err = new Error('Datos incorrectos');
          next(err);
          return;
        }

        jwt.sign({ usuario_id: userFound._id }, config.jwtSecret, config.jwtConfig,
          (err, token) => {
            if (err) {
              next(err);
              return;
            }
            res.json({ success: true, token });
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
    })
    .catch(err => {
      next(err);
      return;
    });
});

module.exports = router;
