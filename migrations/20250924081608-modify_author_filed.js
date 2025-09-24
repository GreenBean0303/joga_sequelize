'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      })
    ]);
  },

  down (queryInterface) {
    return Promise.all([
      queryInterface.dropTable('Authors')
    ]);
  }
};