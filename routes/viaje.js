var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.viajes.findAll({
            include: [
                { model: model.ingresos },
                { model: model.camions },
                { model: model.institucions },
            ]
        })
        .then(viaje => res.json({
            error: false,
            data: viaje
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
/*router.post('/', function(req, res, next) {

    const {
        nombre,
        direccion,
        telefono,
    } = req.body;
    
    model.institucions.create({
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
        })
        .then(newInstitucion => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente la nueva institucion'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar una nueva institucion. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const institucion_id = req.params.id;
 
    const {
        nombre,
        direccion,
        telefono,
    } = req.body;
 
    model.institucions.update({
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
        }, {
            where: {
                id: institucion_id
            }
        })
        .then(updateInstitucion => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos de la institucion correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const institucion_id = req.params.id;
 
    model.institucions.destroy({ 
        where: {
            id: institucion_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'La institucion ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});*/
 
module.exports = router;
