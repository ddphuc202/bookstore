'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const posts = [
      {
        title: 'Đánh giá sách "Dấu Chân Trên Cát"',
        content: 'Cuốn sách "Dấu Chân Trên Cát" của tác giả Nguyễn Nhật Ánh rất cảm động và sâu sắc, mang lại nhiều cảm xúc khác nhau cho độc giả.',
        image: 'post_image1.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông báo khuyến mãi tuần này',
        content: 'Tuần này, chúng tôi có một chương trình giảm giá đặc biệt dành cho các độc giả thân yêu. Hãy đón đọc để không bỏ lỡ cơ hội!',
        image: 'post_image2.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Sự kiện ra mắt sách mới của tác giả Nguyễn Trí Minh',
        content: 'Ngày mai, chúng ta hãy cùng tham gia sự kiện ra mắt cuốn sách mới của tác giả Nguyễn Trí Minh tại nhà sách chúng ta.',
        image: 'post_image3.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Phỏng vấn với nhà văn Nguyễn Ngọc Tư',
        content: 'Ngày hôm nay, chúng tôi đã có dịp phỏng vấn với nhà văn Nguyễn Ngọc Tư về cuốn sách "Lối Mòn" và những ý tưởng sáng tác.',
        image: 'post_image4.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Giới thiệu về cuốn sách "Những Kẻ Hành Quyết"',
        content: 'Được viết bởi tác giả Nguyễn Huy Thiệp, "Những Kẻ Hành Quyết" là một trong những tác phẩm văn học nổi tiếng của văn hào.',
        image: 'post_image5.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về tác giả Bích Minh',
        content: 'Tác giả Bích Minh là một nhà văn trẻ nổi bật với nhiều tác phẩm văn học đầy ấn tượng và sáng tạo.',
        image: 'post_image6.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Bài phê bình về tiểu thuyết "Bến Đò Lịch Sử"',
        content: 'Cuốn sách "Bến Đò Lịch Sử" của tác giả Lê Minh Quốc mang đến cho độc giả nhiều cảm xúc sâu sắc về lịch sử và con người.',
        image: 'post_image7.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin sự kiện đặc biệt sắp tới',
        content: 'Chúng tôi rất hân hạnh thông báo về sự kiện đặc biệt sắp tới, mời quý độc giả đón đọc!',
        image: 'post_image8.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Cảm nhận về tác phẩm "Truyện Ngắn Nam Cao"',
        content: 'Những tác phẩm ngắn của Nam Cao luôn đem đến cho độc giả những bài học sâu sắc và triết lí về cuộc sống.',
        image: 'post_image9.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Tâm sự với tác giả Nguyễn Ngọc Thạch',
        content: 'Ngày hôm nay, chúng tôi có dịp trò chuyện với tác giả Nguyễn Ngọc Thạch về những tác phẩm đã viết và những dự định sắp tới.',
        image: 'post_image10.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về cuốn sách "Nhật Ký Trong Tù"',
        content: 'Tác phẩm "Nhật Ký Trong Tù" của chủ tịch Hồ Chí Minh là một tài liệu lịch sử và văn học quý giá.',
        image: 'post_image11.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Chia sẻ về cuốn sách "Từ Biệt"',
        content: 'Một câu chuyện về tình bạn và những lời từ biệt cuối cùng trong cuộc đời.',
        image: 'post_image12.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Phân tích cuốn sách "Bước Đường Cùng"',
        content: 'Cuốn sách "Bước Đường Cùng" của Nguyễn Đức Thuận là một tác phẩm đầy triết lý về sự sống.',
        image: 'post_image13.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Khuyến mãi đặc biệt dành cho bạn',
        content: 'Hãy cùng chúng tôi khám phá những ưu đãi hấp dẫn cho những độc giả thân yêu!',
        image: 'post_image14.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Bài viết về tác phẩm "Nhà Giả Kim"',
        content: 'Cuốn sách "Nhà Giả Kim" của Paulo Coelho đã để lại nhiều ấn tượng và triết lý về sự sống cho độc giả.',
        image: 'post_image15.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Giới thiệu về tác giả Nguyễn Huy Thiệp',
        content: 'Nguyễn Huy Thiệp là một trong những nhà văn nổi tiếng với những tác phẩm văn học độc đáo và sâu sắc.',
        image: 'post_image16.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Đánh giá tiểu thuyết "Chí Phèo"',
        content: 'Tiểu thuyết "Chí Phèo" của Nam Cao mang đến cho độc giả nhiều cảm xúc về cuộc sống và nhân sinh.',
        image: 'post_image17.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về tác giả Trần Trung Đạo',
        content: 'Tác giả Trần Trung Đạo là một trong những cây bút tài hoa của văn học Việt Nam hiện đại.',
        image: 'post_image18.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Cảm nhận về sách "Cánh Đồng Bất Tận"',
        content: 'Sách "Cánh Đồng Bất Tận" là một trong những tác phẩm văn học tâm lý sâu sắc của nhà văn Nguyễn Ngọc Thạch.',
        image: 'post_image19.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về tác phẩm "Nỗi Buồn Chiến Tranh"',
        content: 'Cuốn sách "Nỗi Buồn Chiến Tranh" là một tài liệu quý giá về lịch sử chiến tranh Việt Nam.',
        image: 'post_image20.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Chia sẻ cảm nhận về tiểu thuyết "Chữ Mồ Côi"',
        content: 'Cuốn tiểu thuyết "Chữ Mồ Côi" của tác giả Ngoại Thành mang lại cho độc giả nhiều suy ngẫm về cuộc đời.',
        image: 'post_image21.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Bài phê bình về tác phẩm "Đất Rừng Phương Nam"',
        content: 'Tác phẩm "Đất Rừng Phương Nam" của tác giả Võ Quảng đã được giới chuyên môn đánh giá rất cao về giá trị nghệ thuật và ý nghĩa nhân văn.',
        image: 'post_image22.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về tác giả Nguyễn Nhật Ánh',
        content: 'Nguyễn Nhật Ánh là một trong những nhà văn nổi tiếng với những tác phẩm văn học đầy sức hút và gần gũi với độc giả.',
        image: 'post_image23.jpg',
        admin_id: 3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Phân tích tiểu thuyết "Dế Mèn Phiêu Lưu Ký"',
        content: 'Cuốn "Dế Mèn Phiêu Lưu Ký" của tác giả Tô Hoài là một trong những tác phẩm thiếu nhi văn học hay nhất.',
        image: 'post_image24.jpg',
        admin_id: 4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        title: 'Thông tin về sự kiện văn học sắp tới',
        content: 'Hãy cùng chúng tôi đón chờ sự kiện văn học sắp tới với những buổi giao lưu và ký sách cùng các tác giả nổi tiếng.',
        image: 'post_image25.jpg',
        admin_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      }
    ]
    await queryInterface.bulkInsert('posts', posts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
