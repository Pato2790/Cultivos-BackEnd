var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
    model.cuadros.findAll({})
    .then(cuadros => res.json({
        error: false,
        data: cuadros
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

router.get('/byChacra/:id', function(req, res, next) {
    
    const chacraId = req.params.id;

    model.cuadros.findAll({
        where: {
                chacraId: chacraId
            }
    })
    .then(cuadros => res.json({
        error: false,
        data: cuadros
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});
 
router.post('/', function(req, res, next) {

    const {
        up,
        chacraId
    } = req.body;
    
    model.cuadros.create({
            up: up,
            chacraId: chacraId
        })
        .then(newCuadro => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente el nuevo cuadro'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar un nuevo cuadro. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const cuadro_id = req.params.id;
 
    const {
        up
    } = req.body;
 
    model.cuadros.update({
            up: up
        }, {
            where: {
                id: cuadro_id
            }
        })
        .then(updateCuadro => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del cuadro correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const cuadro_id = req.params.id;
 
    model.cuadros.destroy({ 
        where: {
            id: cuadro_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'El cuadro ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;
