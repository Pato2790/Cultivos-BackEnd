/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var camion = sequelize.define('camions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    patenteChasis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patenteAcoplado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombreChofer: {
      type: DataTypes.STRING(255),
      allowNull: true
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

  return camion;
};
