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
    if (err) {
      next(err);
      return;
    }

    if (!userFound) {
      res.json({ sucess: false, error: 'Datos incorrectos' });
    }

    bcrypt.compare(clave, userFound.clave)
      .then((res) => {

        return new Promise((resolve, reject) => {
          if (!res) {
            res.json({ sucess: false, error: 'Datos incorrectos' });
          }

          jwt.sign({ usuario_id: userFound._id }, config.jwtSecret, config.jwtConfig,
            (err, token) => {
              if (err) {
                reject(err);
              }
              res.json({ success: true, token });
              resolve();
            });
        });

      })
      .catch((err) => {
        next(err);
        return;
      });

  });
});

router.post('/registro', (req, res, next) => {

  const email = req.body.email;
  const unhashedClave = req.body.clave;
  const nombre = req.body.nombre;

  bcrypt.hash(unhashedClave, saltRounds)
    .then(hash => {

      return new Promise((resolve, reject) => {
        const newUser = new Usuario({ email, clave: hash, nombre });
        newUser.save((err, user) => {
          if (err) {
            reject(err);
          } else {
            res.json({ success: true, user: 'sdkgfksghhk' });
          }
        });
      });

    })
    .catch((err) => {
      next(err);
      return;
    });
});

module.exports = router;
