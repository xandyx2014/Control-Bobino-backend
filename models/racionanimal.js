'use strict';
module.exports = (sequelize, DataTypes) => {
  const RacionAnimal = sequelize.define('RacionAnimal', {
    insume: DataTypes.STRING,
    tipo_insume: DataTypes.STRING,
    kg_dia: DataTypes.DOUBLE,
    precio_kg: DataTypes.DOUBLE,
    precio_total: DataTypes.DOUBLE,
    inclusion: DataTypes.DOUBLE,
    kg_tn: DataTypes.DOUBLE,
    calculo_lecheria_id: DataTypes.INTEGER
  }, {});
  RacionAnimal.associate = function(models) {
    RacionAnimal.belongsTo(models.CalculoLecheria, {
      foreignKey: 'calculo_lecheria_id',
      onDelete: 'cascade',
      foreignKeyConstraint: true
    });
  };
  return RacionAnimal;
};