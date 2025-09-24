'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Joonas Joo',
        email: 'Joonas.Joo@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agnes Agne',
        email: 'Agnes.Agne@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
       name: 'Peep Seep',
       email: 'Peep.Seep@example.com',
       createdAt: new Date(),
       updatedAt: new Date()

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};