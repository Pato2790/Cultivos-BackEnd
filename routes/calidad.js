var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.calidads.findAll({})
        .then(calidades => res.json({
            error: false,
            data: calidades
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;