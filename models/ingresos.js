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
    ingreso.hasMany(models.lotes, {foreignKey: 'ingresoId'});
  };

  return ingreso;
};
