/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var ingreso = sequelize.define('ingresos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nroRemito: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    viajeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'viajes',
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
    createdFor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  ingreso.associate = function (models) {
    ingreso.hasMany(models.lotes);
    ingreso.belongsTo(models.viajes, {foreignKey: 'viajeId'});
  };

  return ingreso;
};
