'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const customers = [
      {
        name: 'Nguyễn Tiến Mạnh',
        email: 'manh@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '0873847333',
        address: '112 Đ. Trương Định, Trương Định, Hai Bà Trưng, Hà Nội',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'Phạm Hải Long',
        email: 'long@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '0989746923',
        address: '8 Đ. Võ Văn Kiệt, Phường Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh ',
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: 'Nguyễn Khả Hân',
        email: 'han@mail.com',
        password: '$2a$12$NgRrWvfDeHe14pn/0NAt2.YFbAQENDmuxoWnLbGHjku8SBj4gvlFq',
        phone: '0979367583',
        address: '40 Đ Ông Ích Đường, Phường Khuê Trung, Quận Cẩm Lệ, TP. Đà Nẵng',
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
