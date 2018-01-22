/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var lote = sequelize.define('lotes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pesoNeto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nroLote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ingresoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ingresos',
        key: 'id'
      }
    },
    especieId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'especies',
        key: 'id'
      }
    },
    calidadId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'calidads',
        key: 'id'
      }
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return lote;
};
