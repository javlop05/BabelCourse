'use strict';

const express = require('express');
const router = express.Router();

router.get('/:imagen', function(req, res) {
    const imagen = req.params.imagen;
    res.render('index', { imagen });
});