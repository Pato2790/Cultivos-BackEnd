var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.ingresos.findAll({
            include: [{
                model: model.lotes,
                include: [
                    { model: model.especies },
                    { model: model.variedads },
                    { model: model.calidads },
                    { model: model.chacras }
                ]
            }]
        })
        .then(ingresos => res.status(201).json({
            error: false,
            data: ingresos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.post('/', function(req, res, next) {

    const {
        nroRemito,
        fechaIngreso,
        createdFor,
        institucionId,
        camionId,
        chacraId,
        lotes
    } = req.body;
    
    model.ingresos.create({
            nroRemito: nroRemito,
            fechaIngreso: fechaIngreso,
            createdFor: createdFor
        })
        .then(newIngreso => 
            lotes.forEach(function(valor, indice){
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
                .then(newLote => console.log("Se creo el lote correctamente."))
                .catch(error => console.log(error))
            }
        ))
        .then(newIngreso => res.status(201).json({
            error: false,
            message: 'Se ha ingresado correctamente el nuevo ingreso'
        }))
        .catch(error => res.json({
            error: true,
            message: 'Hubo un error al intentar cargar un nuevo ingreso. Contactese con el administrador.'
        }));
});

router.put('/:id', function(req, res, next) {
 
    const ingreso_id = req.params.id;
 
    const {
        nroRemito,
        fechaIngreso,
    } = req.body;
 
    model.ingresos.update({
            nroRemito: nroRemito,
            fechaIngreso: fechaIngreso,
        }, {
            where: {
                id: ingreso_id
            }
        })
        .then(updateInstitucion => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del ingreso correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const ingreso_id = req.params.id;
 
    model.ingresos.destroy({ 
        where: {
            id: ingreso_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'El ingreso ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});

module.exports = router;