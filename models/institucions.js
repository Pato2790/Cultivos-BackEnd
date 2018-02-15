/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var institucion = sequelize.define('institucions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono: {
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

  institucion.associate = function (models) {
    institucion.hasMany(models.viajes, {foreignKey: 'institucionId'});
  };

  return institucion;
};
