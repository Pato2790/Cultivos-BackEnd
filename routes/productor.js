var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.productors.findAll({
            include: [{
                model: model.chacras
            }]
        })
        .then(productores => res.json({
            error: false,
            data: productores
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
router.post('/', function(req, res, next) {

    const {
        dni,
        nombre,
        telefono,
        chacras_ids
    } = req.body;
    
    model.productors.create({
            dni: dni,
            nombre: nombre,
            telefono: telefono,
        })
        .then(newProductor => 
            chacras_ids.forEach(function(valor, indice){
                model.chacraproductors.create({
                    chacraId: valor,
                    productorId: newProductor.id
                })
                .then(chacraProductor => console.log("Asociación Chacra-Productor realizada correctamente."))
                .catch(error => console.log(error))
            }
        ))
        .then(newProductor => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente el nuevo productor'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar un nuevo productor. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const productor_id = req.params.id;
 
    const { dni, nombre, telefono } = req.body;
 
    model.productors.update({
            dni: dni,
            nombre: nombre,
            telefono: telefono
        }, {
            where: {
                id: productor_id
            }
        })
        .then(updateProductor => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del productor correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const productor_id = req.params.id;
 
    model.productors.destroy({ 
        where: {
            id: productor_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'El productor ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;
