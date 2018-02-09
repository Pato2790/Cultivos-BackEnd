var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.lotes.findAll({})
        .then(lotes => res.json({
            error: false,
            data: lotes
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
router.post('/', function(req, res, next) {

    const {
        nroLote,
        cantBins,
        pesoNeto,
        calidadId,
        especieId,
        variedadId,
        institucionId,
        camionId,
        ingresoId,
        chacraId
    } = req.body;
    
    model.lotes.create({
            nroLote: valor.nroLote,
            pesoNeto: valor.peso,
            cantBins: valor.cantBins,
            calidadId: valor.calidadId,
            especieId: valor.especieId,
            variedadId: valor.variedadId,
            institucionId: institucionId,
            camionId: camionId,
            ingresoId: newIngreso.id,
            chacraId: chacraId
        })
        .then(newLote => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente el nuevo lote'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar un nuevo lote. Contactese con el administrador.'
        }));
});
 
router.put('/:id', function(req, res, next) {
 
    const loteId = req.params.id;
 
    const { nroLote,
            cantBins,
            pesoNeto,
            calidadId,
            especieId,
            variedadId 
        } = req.body;
 
    model.lotes.update({
            nroLote: nroLote,
            pesoNeto: pesoNeto,
            cantBins: cantBins,
            calidadId: calidadId,
            especieId: especieId,
            variedadId: variedadId,
        }, {
            where: {
                id: loteId
            }
        })
        .then(updateLote => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del lote correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const loteId = req.params.id;
 
    model.lotes.destroy({ 
        where: {
            id: loteId
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'El lote ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;