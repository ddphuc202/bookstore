'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const customers = [
      {
        name: 'John Doe',
        email: 'john@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '123456789',
        address: '123 Main St',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'John Doe 2',
        email: 'john2@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '123456789',
        address: '123 Main St',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'John Doe 3',
        email: 'john3@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '123456789',
        address: '123 Main St',
        created_at: currentDate,
        updated_at: currentDate
      }
    ];
    await queryInterface.bulkInsert('customers', customers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
