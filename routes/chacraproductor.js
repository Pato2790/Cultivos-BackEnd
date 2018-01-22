var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */
router.get('/', function(req, res, next) {
	model.chacraproductors.findAll({})
        .then(chacraProductores => res.json({
            error: false,
            data: chacraProductores
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
        productor_id,
        chracra_id
    } = req.body;
    
    model.chacraproductors.create({
            productor_id: productor_id,
            chracra_id: chracra_id
        })
        .then(newChacraProductor => res.status(201).json({
            error: false,
            data: newChacraProductor,
            message: 'Se ha asociado correctamente la chacra con el productor'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
 
    const chracraProductor_id = req.params.id;
 
    const {
        productor_id,
        chracra_id
    } = req.body;
 
    model.chacraproductors.update({
            productor_id: productor_id,
            chracra_id: chracra_id
        }, {
            where: {
                id: chracraProductor_id
            }
        })
        .then(updateChacraProductor => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos de la asociacion correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {

    const chracraProductor_id = req.params.id;
 
    model.chacraproductors.destroy({ 
        where: {
            id: chracraProductor_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'La asociacion ha sido eliminada con exito'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;