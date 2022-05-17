'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Books", [
      {
        title: "Prucurando Nemo",
        author: "Fulano",
        pageQuantity: "2",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: "Spider Man",
        author: "Stan Lee",
        pageQuantity: "2",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("Books", null, {})

  }
};
