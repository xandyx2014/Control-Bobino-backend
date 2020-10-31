'use strict';
module.exports = (sequelize, DataTypes) => {
  const CalculoLecheria = sequelize.define('CalculoLecheria', {
    peso_kg: DataTypes.DOUBLE,
    kg_leche_dia: DataTypes.DOUBLE,
    material_grasa: DataTypes.DOUBLE,
    gmd: DataTypes.DOUBLE,
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  CalculoLecheria.associate = function(models) {
    // associations can be defined here
    CalculoLecheria.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    CalculoLecheria.hasMany(models.RacionAnimal, {
      foreignKey: 'calculo_lecheria_id',
      onDelete: 'cascade'
    });
    CalculoLecheria.hasMany(models.RequerimientoAnimal, {
      foreignKey: 'calculo_lecheria_id',
      onDelete: 'cascade'
    });
  };
  return CalculoLecheria;
};