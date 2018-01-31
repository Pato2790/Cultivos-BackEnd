var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.especies.findAll({
            include: [{
                model: model.variedads
            }]
        })
        .then(especies => res.status(201).json({
            error: false,
            data: especies
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;