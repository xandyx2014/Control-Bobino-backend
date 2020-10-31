'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequerimientoAnimal = sequelize.define('RequerimientoAnimal', {
    mantenimiento_ms: DataTypes.DOUBLE,
    mantenimiento_ndt: DataTypes.DOUBLE,
    mantenimiento_em: DataTypes.DOUBLE,
    mantenimiento_pb: DataTypes.DOUBLE,
    produccion_ms: DataTypes.DOUBLE,
    produccion_ndt: DataTypes.DOUBLE,
    produccion_em: DataTypes.DOUBLE,
    produccion_pb: DataTypes.DOUBLE,
    rq_total_ms: DataTypes.DOUBLE,
    rq_total_ndt: DataTypes.DOUBLE,
    rq_total_em: DataTypes.DOUBLE,
    rq_total_pb: DataTypes.DOUBLE,
    exceso_ms: DataTypes.DOUBLE,
    exceso_ndt: DataTypes.DOUBLE,
    exceso_em: DataTypes.DOUBLE,
    exceso_pb: DataTypes.DOUBLE,
    total_tmr_ms: DataTypes.DOUBLE,
    total_tmr_ndt: DataTypes.DOUBLE,
    total_tmr_em: DataTypes.DOUBLE,
    total_tmr_pb: DataTypes.DOUBLE,
    balance_concentrado: DataTypes.DOUBLE,
    balance_voluminoso: DataTypes.DOUBLE,
    calculo_lecheria_id: DataTypes.INTEGER
  }, {});
  RequerimientoAnimal.associate = function(models) {
    RequerimientoAnimal.belongsTo(models.CalculoLecheria, {
      foreignKey: 'calculo_lecheria_id',
      onDelete: 'cascade',
      foreignKeyConstraint: true
    });
  };
  return RequerimientoAnimal;
};