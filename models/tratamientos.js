'use strict';
module.exports = (sequelize, DataTypes) => {
  var tratamiento = sequelize.define('tratamientos', {
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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  	tratamiento.associate = function (models) {
    	tratamiento.hasMany(models.lotes);
	};

  return tratamiento;
};