'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const categories = [
      { name: 'Khoa Học', created_at: currentDate, updated_at: currentDate },
      { name: 'Kinh Dị', created_at: currentDate, updated_at: currentDate },
      { name: 'Lãng Mạn', created_at: currentDate, updated_at: currentDate },
      { name: 'Lịch Sử', created_at: currentDate, updated_at: currentDate },
      { name: 'Tâm lý', created_at: currentDate, updated_at: currentDate }
    ];
    await queryInterface.bulkInsert('categories', categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
