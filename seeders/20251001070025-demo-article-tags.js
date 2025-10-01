"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 6,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 6,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 7,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 7,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 7,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 8,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 8,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ArticleTags");
  },
};
