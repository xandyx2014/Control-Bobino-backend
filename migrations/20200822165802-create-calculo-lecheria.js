'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalculoLecheria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      peso_kg: {
        type: Sequelize.DOUBLE
      },
      gmd: {
        type: Sequelize.DOUBLE
      },
      tipo: {
        type: Sequelize.STRING
      },
      kg_leche_dia: {
        type: Sequelize.DOUBLE
      },
      material_grasa: {
        type: Sequelize.DOUBLE
      },
      titulo: {
        type: Sequelize.STRING
      },
      user_id: {
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
    return queryInterface.dropTable('CalculoLecheria');
  }
};