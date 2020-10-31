'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RequerimientoAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mantenimiento_ms: {
        type: Sequelize.DOUBLE
      },
      mantenimiento_ndt: {
        type: Sequelize.DOUBLE
      },
      mantenimiento_em: {
        type: Sequelize.DOUBLE
      },
      mantenimiento_pb: {
        type: Sequelize.DOUBLE
      },
      produccion_ms: {
        type: Sequelize.DOUBLE
      },
      produccion_ndt: {
        type: Sequelize.DOUBLE
      },
      produccion_em: {
        type: Sequelize.DOUBLE
      },
      produccion_pb: {
        type: Sequelize.DOUBLE
      },
      rq_total_ms: {
        type: Sequelize.DOUBLE
      },
      rq_total_ndt: {
        type: Sequelize.DOUBLE
      },
      rq_total_em: {
        type: Sequelize.DOUBLE
      },
      rq_total_pb: {
        type: Sequelize.DOUBLE
      },
      exceso_ms: {
        type: Sequelize.DOUBLE
      },
      exceso_ndt: {
        type: Sequelize.DOUBLE
      },
      exceso_em: {
        type: Sequelize.DOUBLE
      },
      exceso_pb: {
        type: Sequelize.DOUBLE
      },
      total_tmr_ms: {
        type: Sequelize.DOUBLE
      },
      total_tmr_ndt: {
        type: Sequelize.DOUBLE
      },
      total_tmr_em: {
        type: Sequelize.DOUBLE
      },
      total_tmr_pb: {
        type: Sequelize.DOUBLE
      },
      balance_concentrado: {
        type: Sequelize.DOUBLE
      },
      balance_voluminoso: {
        type: Sequelize.DOUBLE
      },
      calculo_lecheria_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RequerimientoAnimals');
  }
};