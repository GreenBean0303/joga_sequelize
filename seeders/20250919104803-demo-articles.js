'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        name: 'First Article',
        slug: 'first-article',
        image: 'image1.jpg',
        body: 'This is the body content of the first article. It contains detailed information about the topic.',
        published: new Date('2024-01-15'),
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Second Article',
        slug: 'second-article',
        image: 'image2.jpg',
        body: 'This is the body content of the second article with more interesting details and information.',
        published: new Date('2024-01-20'),
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};