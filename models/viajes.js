'use strict';
module.exports = (sequelize, DataTypes) => {
  var viaje = sequelize.define('viajes', {
  	id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    costo: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    createdFor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    camionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'camions',
        key: 'id'
      }
    },
    institucionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'institucions',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
   },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  viaje.associate = function (models) {
    viaje.belongsTo(models.institucions, {foreignKey: 'institucionId'});
    viaje.belongsTo(models.camions, {foreignKey: 'camionId'});
    viaje.belongsToMany(models.ingresos, { as: 'ingresos_viajes', through: models.ingresoviajes, foreignKey: 'viajeId'});
  };

  return viaje;
};