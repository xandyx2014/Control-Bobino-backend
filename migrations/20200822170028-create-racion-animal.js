'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RacionAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      insume: {
        type: Sequelize.STRING
      },
      tipo_insume: {
        type: Sequelize.STRING
      },
      kg_dia: {
        type: Sequelize.DOUBLE
      },
      precio_kg: {
        type: Sequelize.DOUBLE
      },
      precio_total: {
        type: Sequelize.DOUBLE
      },
      inclusion: {
        type: Sequelize.DOUBLE
      },
      kg_tn: {
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
    return queryInterface.dropTable('RacionAnimals');
  }
};