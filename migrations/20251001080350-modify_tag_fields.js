"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("Tags", "id", {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      }),
      queryInterface.changeColumn("Tags", "name", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([queryInterface.dropTable("Tags")]);
  },
};
