'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query()
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query();
  }
};