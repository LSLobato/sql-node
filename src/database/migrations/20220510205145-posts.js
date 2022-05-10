'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface.createTable('posts', { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false
          },
          subtitle: {
            type: Sequelize.STRING,
            allowNull: false
          },
          author: {
            type: Sequelize.STRING,
            allowNull: false
          },
          text: {
            type: Sequelize.STRING,
            allowNull: false
          },
          pdf_repository: {
            type: Sequelize.STRING,
            allowNull: false
          },
          pdf_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false
          }
        })
     
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable('posts');
  }
};
