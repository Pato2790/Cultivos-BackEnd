/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var chacra = sequelize.define('chacras', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    renspa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
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
        
      }
    }
  });

  chacra.associate = function (models) {
    chacra.hasMany(models.cuadros);
    chacra.hasMany(models.lotes, {foreignKey: 'chacraId'});
  };

  return chacra;
};
