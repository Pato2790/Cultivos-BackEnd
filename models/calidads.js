/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var calidad = sequelize.define('calidads', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.ENUM('Verde','Amarillo','Rojo'),
      allowNull: false,
      defaultValue: 'Verde'
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
  
  return calidad;
};
