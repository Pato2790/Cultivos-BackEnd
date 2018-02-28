var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.tratamientos.findAll({})
        .then(tratamientos => res.status(201).json({
            error: false,
            data: tratamientos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;