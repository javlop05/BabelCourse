'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken');
const config = require('../../config');

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.json({ success: false, error: 'Debes rellenar los campos de login' });
  }

  Usuario.findOne({ email }).exec((err, userFound) => {
    if (err) {
      next(err);
      return;
    }

    if (!userFound || userFound.password !== password) {
      res.json({ sucess: false, error: 'Credenciales incorrectas' });
    }

    jwt.sign({ usuario_id: userFound._id }, config.jwt.secret, config.jwtConfig,
      (err, token) => {
        if (err) {
          next(err);
          return;
        }
        res.json({ success: true, token });
      });
  });
});

router.post('registro', (req, res, next) => {
  const newUser = new Usuario(req.body);

  newUser.save((err, user) => {
    if (err) {
      next(err);
      return;
    }

    res.json( {success: true, user} );
  });
});

module.exports = router;
