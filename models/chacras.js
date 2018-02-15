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
    productorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'chacras',
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
        
      }
    }
  });

  chacra.associate = function (models) {
    chacra.hasMany(models.cuadros);
    chacra.hasMany(models.lotes);
    chacra.belongsTo(models.productors, {foreignKey: 'productorId'});
  };

  return chacra;
};
