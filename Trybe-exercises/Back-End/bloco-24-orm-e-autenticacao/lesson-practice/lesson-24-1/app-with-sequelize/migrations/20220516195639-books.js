'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const booksTable = queryInterface.createTable("Books",{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },


    })
    return booksTable
  },

  async down (queryInterface, Sequelize) { 
    queryInterface.dropTable ("Books")

  }
};
