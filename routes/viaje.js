var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
router.get('/', function(req, res, next) {
	model.viajes.findAll({
            include: [
                { 
                    model: model.ingresos,
                    as: 'ingresos_viajes'
                },
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

router.post('/', function(req, res, next) {

    const {
            fecha,
            costo,
            createdFor,
            institucionId,
            camionId,
            ingresoId
        } = req.body;

    model.sequelize.transaction(function (t) 
    {
        return model.viajes.create(
        {
           fecha: fecha,
           costo: costo,
           createdFor: createdFor,
           institucionId: institucionId,
           camionId: camionId
        }, { transaction : t })
        .then(function(newViaje) {
            return model.ingresoviajes.create(
                {
                    viajeId: newViaje.id,
                    ingresoId: ingresoId
                }, { transaction : t })            
        });
    })
    .then(newViaje => res.json({
        error: false,
        message: 'Se ha ingresado correctamente el nuevo viaje'
    }))
    .catch(error => res.json({
        error: true,
        errors: error,
        message: 'Hubo un error al intentar cargar un nuevo viaje. Contactese con el administrador.'
    }));
});

router.post('/withIngresos', function(req, res, next) {

    const {
        fecha,
        costo,
        createdFor,
        institucionId,
        camionId,
        ingresos
    } = req.body;

    model.sequelize.transaction(function (t) 
    {
        return model.viajes.create(
        {
           fecha: fecha,
           costo: costo,
           createdFor: createdFor,
           institucionId: institucionId,
           camionId: camionId
        }, { transaction : t })
        .then(function(newViaje) {
            var ingresosPromises = [];

            ingresos.forEach(function(ingreso, indice){

                ingresosPromises.push(model.ingresos.create(
                    {
                        nroRemito: ingreso.nroRemito,
                        fechaIngreso: ingreso.fechaIngreso,
                        createdFor: ingreso.createdFor,
                        viajeId: newViaje.Id
                    }, { transaction : t })
                );
            });
            
            return Promise.all(ingresosPromises)
            .then(function(newIngresos) {
                var viajesIngresosPromises = [];

                newIngresos.forEach(function(newIngreso, indiceNewIngreso){
                    viajesIngresosPromises.push(model.ingresoviajes.create(
                        {
                            viajeId: newViaje.id,
                            ingresoId: newIngreso.id
                        }, { transaction : t })
                    );
                });

                return Promise.all(viajesIngresosPromises)
                .then(function (newViajesIngresos) {
                    var lotesPromise = [];
                    ingresos.forEach(function(ingreso, indiceIngreso){
                        ingreso.lotes.forEach(function(lote, indiceLote){
                            lotesPromise.push(model.lotes.create(
                                {
                                    nroLote: lote.nroLote,
                                    pesoNeto: lote.peso,
                                    cantBins: lote.cantBins,
                                    calidadId: lote.calidadId,
                                    especieId: lote.especieId,
                                    variedadId: lote.variedadId,
                                    cuadroId: lote.cuadroId,
                                    tratamientoId: lote.tratamientoId,
                                    ingresoId: newIngresos[indiceIngreso].id,
                                    chacraId: ingreso.chacraId
                                },{ transaction : t })
                            );
                        });
                    });
                    return Promise.all(lotesPromise);
                })
            });
            
        });
    })
    .then(newViaje => res.json({
        error: false,
        message: 'Se ha ingresado correctamente el nuevo viaje'
    }))
    .catch(error => res.json({
        error: true,
        errors: error,
        message: 'Hubo un error al intentar cargar un nuevo viaje. Contactese con el administrador.'
    }));
});
 
router.put('/:id', function(req, res, next) {
 
    const viaje_id = req.params.id;
 
    const {
        fecha,
        costo,
    } = req.body;
 
    model.viajes.update({
            fecha: fecha,
            costo: costo,
        }, {
            where: {
                id: viaje_id
            }
        })
        .then(updateViaje => res.status(201).json({
            error: false,
            message: 'Se han actualizado los datos del viaje correctamente'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
router.delete('/:id', function(req, res, next) {

    const viaje_id = req.params.id;
 
    model.viajes.destroy({ 
        where: {
            id: viaje_id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'EL viaje ha sido eliminado'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});
 
module.exports = router;
