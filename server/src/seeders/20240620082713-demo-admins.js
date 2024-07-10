'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const admins = [
      {
        name: 'Super Admin',
        email: 'superadmin@khaitam.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        role: 'super',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'Admin 1',
        email: 'admin1@khaitam.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'Admin 2',
        email: 'admin2@khaitam.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'Admin 3',
        email: 'admin3@khaitam.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        created_at: currentDate,
        updated_at: currentDate
      }
    ];
    await queryInterface.bulkInsert('admins', admins, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
