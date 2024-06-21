'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const books = [
      {
        title: 'Dấu Chân Trên Cát',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Nhật Ánh',
        description: 'Một câu chuyện đầy cảm động về tuổi thơ và những giấc mơ.',
        price: 85000,
        discount: 0,
        category_id: 1,
        quantity: 100,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Người Mẹ Tốt',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Trí Minh',
        description: 'Một tác phẩm văn học sâu sắc về tình mẫu tử và hy sinh.',
        price: 78000,
        discount: 0,
        category_id: 2,
        quantity: 80,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Lối Mòn',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Ngọc Tư',
        description: 'Tiểu thuyết về những góc khuất trong cuộc sống.',
        price: 92000,
        discount: 0,
        category_id: 3,
        quantity: 90,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Những Kẻ Hành Quyết',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Huy Thiệp',
        description: 'Tập truyện về những câu chuyện đan xen về nhân quả và số phận.',
        price: 89000,
        discount: 0,
        category_id: 4,
        quantity: 95,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Vượt Sóng',
        thumbnail: 'thumbnail.jpg',
        author: 'Bích Minh',
        description: 'Một tác phẩm về sự vượt khó và tìm lại chính mình.',
        price: 87000,
        discount: 0,
        category_id: 5,
        quantity: 85,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Bến Đò Lịch Sử',
        thumbnail: 'thumbnail.jpg',
        author: 'Lê Minh Quốc',
        description: 'Câu chuyện về những dấu tích lịch sử trên con đường đời.',
        price: 80000,
        discount: 0,
        category_id: 1,
        quantity: 75,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Truyện Ngắn Nam Cao',
        thumbnail: 'thumbnail.jpg',
        author: 'Nam Cao',
        description: 'Những tác phẩm truyện ngắn gắn liền với tâm hồn dân tộc.',
        price: 93000,
        discount: 0,
        category_id: 2,
        quantity: 85,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Những Câu Chuyện Về Cuộc Sống',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Ngọc Thạch',
        description: 'Tập truyện ngắn về những khía cạnh đời sống và con người.',
        price: 88000,
        discount: 0,
        category_id: 3,
        quantity: 90,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Nhật Ký Trong Tù',
        thumbnail: 'thumbnail.jpg',
        author: 'Hồ Chí Minh',
        description: 'Những ghi chép chân thực về cuộc sống và tinh thần trong tù.',
        price: 91000,
        discount: 0,
        category_id: 4,
        quantity: 95,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Từ Biệt',
        thumbnail: 'thumbnail.jpg',
        author: 'Trần Trung Đạo',
        description: 'Câu chuyện về tình bạn và những lời từ biệt cuối cùng.',
        price: 84000,
        discount: 0,
        category_id: 5,
        quantity: 80,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Bước Đường Cùng',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Đức Thuận',
        description: 'Tiểu thuyết về những lựa chọn và điểm dừng cuộc đời.',
        price: 82000,
        discount: 0,
        category_id: 1,
        quantity: 70,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Nhà Giả Kim',
        thumbnail: 'thumbnail.jpg',
        author: 'Paulo Coelho',
        description: 'Một cuốn sách về sự tìm kiếm ý nghĩa cuộc sống.',
        price: 86000,
        discount: 0,
        category_id: 2,
        quantity: 85,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Tốt Đẹp Mỹ Miều',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Huy Thiệp',
        description: 'Câu chuyện về sự tương tế và lòng tự trọng của con người.',
        price: 90000,
        discount: 0,
        category_id: 3,
        quantity: 90,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Chí Phèo',
        thumbnail: 'thumbnail.jpg',
        author: 'Nam Cao',
        description: 'Tiểu thuyết về cuộc đời và những lựa chọn của nhân vật chính.',
        price: 95000,
        discount: 0,
        category_id: 4,
        quantity: 95,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Điều Cần Thiết',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Minh Châu',
        description: 'Một câu chuyện về sự kiên trì và những thử thách trong cuộc sống.',
        price: 87000,
        discount: 0,
        category_id: 5,
        quantity: 80,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Số Đỏ',
        thumbnail: 'thumbnail.jpg',
        author: 'Vũ Trọng Phụng',
        description: 'Tiểu thuyết gây sốc về thực tế xã hội Việt Nam thời bấy giờ.',
        price: 94000,
        discount: 0,
        category_id: 1,
        quantity: 75,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Truyện Kiều',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Du',
        description: 'Một trong những tác phẩm văn học lớn của dân tộc Việt Nam.',
        price: 89000,
        discount: 0,
        category_id: 2,
        quantity: 80,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Gặp Gỡ Vương Lịch Xuyên',
        thumbnail: 'thumbnail.jpg',
        author: 'Lý Á Bằng',
        description: 'Tiểu thuyết về sự gặp gỡ và những phép màu trong cuộc đời.',
        price: 92000,
        discount: 0,
        category_id: 3,
        quantity: 85,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Dế Mèn Phiêu Lưu Ký',
        thumbnail: 'thumbnail.jpg',
        author: 'Tô Hoài',
        description: 'Câu chuyện về những phiêu lưu và khám phá của một chú dế nhỏ.',
        price: 83000,
        discount: 0,
        category_id: 4,
        quantity: 90,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thế Giới Khác',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Ngọc Tư',
        description: 'Tiểu thuyết về sự đối lập giữa thực tế và ảo tưởng.',
        price: 91000,
        discount: 0,
        category_id: 5,
        quantity: 95,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Vượt Lên Bản Thân',
        thumbnail: 'thumbnail.jpg',
        author: 'Trần Thị Thu Hương',
        description: 'Những câu chuyện về sự vượt khó và thành công trong cuộc sống.',
        price: 85000,
        discount: 0,
        category_id: 1,
        quantity: 70,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Lão Hạc',
        thumbnail: 'thumbnail.jpg',
        author: 'Nam Cao',
        description: 'Tiểu thuyết về sự mâu thuẫn giữa tuổi trẻ và tâm hồn già nua.',
        price: 89000,
        discount: 0,
        category_id: 2,
        quantity: 85,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Từ Đường Về Nhà',
        thumbnail: 'thumbnail.jpg',
        author: 'Nguyễn Ngọc Thạch',
        description: 'Câu chuyện về sự lựa chọn và tìm về nguồn cội.',
        price: 92000,
        discount: 0,
        category_id: 3,
        quantity: 90,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Câu Chuyện Tình Yêu',
        thumbnail: 'thumbnail.jpg',
        author: 'Various Authors',
        description: 'Những câu chuyện tình yêu ngọt ngào và cảm động.',
        price: 88000,
        discount: 0,
        category_id: 4,
        quantity: 95,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Con Đường Mới',
        thumbnail: 'thumbnail.jpg',
        author: 'Trần Trung Đạo',
        description: 'Câu chuyện về sự nỗ lực và khát vọng xây dựng một con đường mới.',
        price: 93000,
        discount: 0,
        category_id: 5,
        quantity: 80,
        created_at: currentDate,
        updated_at: currentDate
      }
    ]
    await queryInterface.bulkInsert('books', books, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
