/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var cuadro = sequelize.define('cuadros', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    up: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chacraId: {
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

  cuadro.associate = function (models) {
    cuadro.belongsTo(models.chacras, {foreignKey: 'chacraId'});
  };

  return cuadro;
};
