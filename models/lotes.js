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
    cantBins: {
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
    variedadId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'variedads',
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
    chacraId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'chacras',
        key: 'id'
      }
    },
    tratamientoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tratamientos',
        key: 'id'
      }
    },
    cuadroId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cuadros',
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

  lote.associate = function (models) {
    lote.belongsTo(models.ingresos, {foreignKey: 'ingresoId'});
    lote.belongsTo(models.especies, {foreignKey: 'especieId'});
    lote.belongsTo(models.variedads, {foreignKey: 'variedadId'});
    lote.belongsTo(models.calidads, {foreignKey: 'calidadId'});
    lote.belongsTo(models.chacras, {foreignKey: 'chacraId'});
    lote.belongsTo(models.tratamientos, {foreignKey: 'tratamientoId'});
    lote.belongsTo(models.cuadros, {foreignKey: 'cuadroId'});
    
  };

  return lote;
};
