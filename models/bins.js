/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var bin = sequelize.define('bins', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    marca: {
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
    loteId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lotes',
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
        // associations can be defined here
      }
    }
  });

  return bin;
};
