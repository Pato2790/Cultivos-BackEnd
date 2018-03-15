var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.empresas.findAll({
            include: [{
                model: model.camions
            }]
        })
        .then(empresas => res.json({
            error: false,
            data: empresas
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
router.post('/', function(req, res, next) {

    const {
        nombre,
        direccion,
        telefono
    } = req.body;
    
    model.empresas.create({
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
        })
        .then(newEmpresa => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente la nueva empresa'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar una nueva empresa. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const empresa_id = req.params.id;
 
    const { nombre, direccion, telefono } = req.body;
 
    model.empresas.update({
            nombre: nombre,
            direccion: direccion,
            telefono: telefono
        }, {
            where: {
                id: empresa_id
            }
        })
        .then(updateEmpresa => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos de la empresa correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const empresa_id = req.params.id;
 
    model.empresas.destroy({ 
        where: {
            id: empresa_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'La empresa ha sido eliminada'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;
