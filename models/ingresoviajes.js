/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var ingresoviaje = sequelize.define('ingresoviajes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    viajeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'viajes',
        key: 'id'
      },
    },
    ingresoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresos',
        key: 'id'
      },
    },
  }, {
      timestamps: false
    },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ingresoviaje;
};