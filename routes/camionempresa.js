var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */
router.get('/', function(req, res, next) {
	model.camionempresas.findAll({})
        .then(camionempresas => res.json({
            error: false,
            data: camionempresas
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;