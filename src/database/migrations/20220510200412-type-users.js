'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('type_users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface) {

    await queryInterface.dropTable('type_users');
  }
};
