var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/:especieId', function(req, res, next) {

    const especieId = req.params.especieId;

	model.variedads.findAll({
            where: {
                especieId : especieId
            }
        })
        .then(variedades => res.status(201).json({
            error: false,
            data: variedades
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;