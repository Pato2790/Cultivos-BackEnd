/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var variedad = sequelize.define('variedads', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    especieId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'especies',
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

  variedad.associate = function (models) {
    variedad.belongsTo(models.especies, {foreignKey: 'especieId'});
    variedad.hasMany(models.lotes, {foreignKey: 'variedadId'});
  };

  return variedad;
};
