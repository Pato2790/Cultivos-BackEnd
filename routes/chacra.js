var express = require('express');
var router = express.Router();
var model = require('../models/index');
var Sequelize = require('sequelize');
 
router.get('/', function(req, res, next) {
	model.chacras.findAll({
        include: [
            { model: model.cuadros },
            { model: model.productors }
        ]
    })
    .then(chacras => res.status(201).json({
        error: false,
        data: chacras
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});
 
 
/* POST todo. */
router.post('/', function(req, res, next) {
    
    const {
        nombre,
        renspa,
    } = req.body;
    
    model.chacras.create({
            renspa: renspa,
            nombre: nombre
        })
        .then(newChacra => res.status(201).json({
            error: false,
            data: newChacra,
            message: 'Se ha ingresado correctamente la nueva chacra'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
 
    const chracra_id = req.params.id;
 
    const { renspa } = req.body;
 
    model.chacras.update({
            renspa: renspa
        }, {
            where: {
                id: chracra_id
            }
        })
        .then(updateChacra => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos de la chacra correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {

    const chacra_id = req.params.id;
 
    model.chacras.destroy({ 
        where: {
            id: chacra_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'La chacra ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;