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
    empresaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'empresas',
        key: 'id'
      },
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

  camion.associate = function (models) {
    camion.belongsTo(models.empresas, { foreignKey: 'empresaId' });
    //camion.hasMany(models.viajes, {foreignKey: 'camionId'});
  };

  return camion;
};
