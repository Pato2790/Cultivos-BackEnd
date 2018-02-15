var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.camions.findAll({
            include: [{
                model: model.empresas
            }]
        })
        .then(camiones => res.json({
            error: false,
            data: camiones
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
router.post('/', function(req, res, next) {

    const {
        patenteChasis,
        patenteAcoplado,
        nombreChofer,
    } = req.body;
    
    model.camions.create({
            patenteChasis: patenteChasis,
            patenteAcoplado: patenteAcoplado,
            nombreChofer: nombreChofer,
        })
        .then(newCamion => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente el nuevo camion'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar un nuevo camion. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const camion_id = req.params.id;
 
    const {
        patenteChasis,
        patenteAcoplado,
        nombreChofer,
    } = req.body;
 
    model.camions.update({
            patenteChasis: patenteChasis,
            patenteAcoplado: patenteAcoplado,
            nombreChofer: nombreChofer
        }, {
            where: {
                id: camion_id
            }
        })
        .then(updateCamion => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del camion correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const camion_id = req.params.id;
 
    model.camions.destroy({ 
        where: {
            id: camion_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'El camion ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;
