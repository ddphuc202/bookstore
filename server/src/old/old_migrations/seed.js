const pool = require('../../config/database');

// Seed admin
const seedAdmins = [
    { email: 'superadmin@khaitam.com', password: '123', name: 'Super Admin', role: 'super' },
    { email: 'admin1@khaitam.com', password: '123', name: 'Admin 1', role: 'admin' },
    { email: 'admin2@khaitam.com', password: '123', name: 'Admin 2', role: 'admin' },
    { email: 'admin3@khaitam.com', password: '123', name: 'Admin 3', role: 'admin' },
];

// Insert seed data into admins table
seedAdmins.forEach((admin) => {
    const query = `INSERT INTO admins (email, password, name, role) VALUES (?, ?, ?, ?)`;
    const values = [admin.email, admin.password, admin.name, admin.role || 'admin'];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Admin ${admin.name} inserted successfully.`);
        }
    });
});

// Seed book categories
const seedCategories = [
    { name: 'Khoa Học Viễn Tưởng' },
    { name: 'Trinh Thám' },
    { name: 'Bí ẩn' },
    { name: 'Kinh Doanh' },
    { name: 'Lãng mạn' },
    { name: 'Lịch Sử' },
    { name: 'Tâm Lý Học' },
    { name: 'Tâm Linh - Tôn Giáo' }
];


// Insert seed data into categories table
seedCategories.forEach(async (category) => {
    const query = `INSERT INTO categories (name) VALUES (?)`;
    const values = [category.name];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Category ${category.name} inserted successfully.`);
        }
    });
});

// Seed books
const seedBooks = [
    { title: 'Dune - Xứ Cát', author: 'Frank Herbert', description: 'Một cuốn tiểu thuyết khoa học viễn tưởng về một hành tinh sa mạc.', price: 19.99, category_id: 1, stock: 100 },
    { title: 'Harry Potter và Hòn Đá Phù Thủy', author: 'J.K. Rowling', description: 'Một tiểu thuyết phù thủy huyền bí.', price: 29.99, category_id: 2, stock: 120 },
    { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', description: 'Một loạt các câu chuyện trinh thám về thám tử nổi tiếng.', price: 15.99, category_id: 3, stock: 100 },
    { title: 'Bí Mật của Triệu Phú', author: 'Robert T. Kiyosaki', description: 'Sách dạy kinh doanh và tài chính cá nhân.', price: 12.99, category_id: 4, stock: 200 },
    { title: 'Nhà Giả Kim', author: 'Paulo Coelho', description: 'Một cuốn sách truyền thống kinh điển.', price: 17.99, category_id: 4, stock: 80 },
    { title: 'Chiến Binh Của Tâm Linh', author: 'Paulo Coelho', description: 'Một câu chuyện về sức mạnh của tâm linh.', price: 14.99, category_id: 4, stock: 150 },
    { title: 'Sapiens: Người Nắm Quyền', author: 'Yuval Noah Harari', description: 'Một cuốn sách phi hư cấu về lịch sử nhân loại.', price: 24.99, category_id: 6, stock: 50 },
    { title: 'Bố Già', author: 'Mario Puzo', description: 'Một cuốn tiểu thuyết về gia đình và tội phạm.', price: 20.99, category_id: 3, stock: 120 },
    { title: 'Cuộc Phiêu Lưu Của Alice Trong Xứ Sở Thần Tiên', author: 'Lewis Carroll', description: 'Một câu chuyện kỳ diệu về một cô gái vào xứ sở thần tiên.', price: 13.99, category_id: 2, stock: 150 },
    { title: 'Bí Mật', author: 'Rhonda Byrne', description: 'Một cuốn sách tự truyện phát triển bản thân.', price: 22.99, category_id: 7, stock: 50 },
    { title: 'Nghệ Thuật Chết', author: 'Nguyễn Hiến Lê', description: 'Một cuốn sách triết học về sự sống và cái chết.', price: 11.99, category_id: 7, stock: 60 },
    { title: 'Trở Lại Từ Cõi Sáng', author: 'Kimberly Clark Sharp', description: 'Một cuốn sách về kinh nghiệm gần chết.', price: 13.99, category_id: 7, stock: 90 },
    { title: 'Bí Mật Thanh Xuân', author: 'Hồng Ân', description: 'Một cuốn sách tự truyện về những năm thanh xuân.', price: 11.99, category_id: 5, stock: 80 },
    { title: 'Mắt Biếc', author: 'Nguyễn Nhật Ánh', description: 'Một cuốn tiểu thuyết tình cảm.', price: 9.99, category_id: 5, stock: 200 },
    { title: 'Tử Thư', author: 'Hoàng Nhật Nam', description: 'Một tiểu thuyết về cuộc sống và cái chết.', price: 8.99, category_id: 3, stock: 110 },
    { title: 'Hồng Lâu Mộng', author: 'Tào Tuyết Cần', description: 'Một cuốn tiểu thuyết văn học cổ điển của Trung Quốc.', price: 21.99, category_id: 5, stock: 70 },
    { title: 'Dấu Chân Trên Cát', author: 'Nguyễn Ngọc Thuần', description: 'Một cuốn sách tự truyện của một nhà văn và nhà báo Việt Nam.', price: 15.99, category_id: 5, stock: 100 },
    { title: 'Nghìn Lẻ Một Đêm', author: 'Antoine Galland', description: 'Một bộ sưu tập truyện dân gian Ả Rập.', price: 19.99, category_id: 5, stock: 140 },
    { title: 'Cẩm Y Chi Hạ', author: 'Tuyết Sơn Phi Hồng', description: 'Một cuốn sách văn học cổ điển của Trung Quốc.', price: 16.99, category_id: 5, stock: 100 },
    { title: 'Những Bí Ẩn Của Thế Giới', author: 'Dan Brown', description: 'Một cuốn tiểu thuyết ly kỳ về những bí ẩn và âm mưu toàn cầu.', price: 18.99, category_id: 3, stock: 80 },
    { title: 'Tâm Hồn Của Lãng Mạn', author: 'Nicholas Sparks', description: 'Một cuốn tiểu thuyết lãng mạn về tình yêu và mối quan hệ.', price: 16.99, category_id: 5, stock: 120 },
    { title: 'Phát Triển Bản Thân: 7 Bước Để Trở Thành Phiên Bản Tốt Nhất Của Bạn', author: 'Tony Robbins', description: 'Một cuốn sách tự phát triển về việc cải thiện bản thân và đạt được mục tiêu.', price: 23.99, category_id: 7, stock: 90 },
    { title: 'Lược Sử Thế Giới', author: 'John M. Roberts', description: 'Một cuốn sách về lịch sử thế giới từ nguyên thủy đến hiện đại.', price: 25.99, category_id: 6, stock: 100 },
    { title: 'Câu Chuyện Cổ Tích Trong Sách', author: 'Joseph Campbell', description: 'Một cuốn sách nghiên cứu về những câu chuyện cổ tích và tầm quan trọng của chúng trong văn hóa.', price: 21.99, category_id: 7, stock: 70 },
    { title: 'Khám Phá Bí Mật Vũ Trụ', author: 'Stephen Hawking', description: 'Một cuốn sách khoa học về vũ trụ và những bí mật của nó.', price: 29.99, category_id: 1, stock: 110 }
];

// Insert seed data into books table
seedBooks.forEach((book) => {
    const query = `INSERT INTO books (title, author, description, price, category_id, stock) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [book.title, book.author, book.description, book.price, book.category_id, book.stock];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Book ${book.title} inserted successfully.`);
        }
    });
});

// Seed posts
const seedPosts = [
    { title: 'Đánh Giá Sách: Dune của Frank Herbert', content: 'Một bài đánh giá chi tiết về cuốn tiểu thuyết khoa học viễn tưởng Dune của Frank Herbert.' },
    { title: '10 Cuốn Sách Hay Không Thể Bỏ Lỡ Trong Tháng Này', content: 'Một danh sách các cuốn sách hay và đáng đọc trong tháng này, bao gồm các thể loại từ khoa học viễn tưởng đến lãng mạn.' },
    { title: 'Sale Đặc Biệt: Giảm Giá 30% Cho Tất Cả Các Sách Lịch Sử', content: 'Thông báo về chương trình giảm giá đặc biệt dành cho các cuốn sách lịch sử.' },
    { title: 'Nghệ Thuật Đọc Sách Hiệu Quả: 5 Bước Đơn Giản', content: 'Một bài viết hướng dẫn về cách đọc sách hiệu quả và tận dụng những kiến thức trong sách.' },
    { title: 'Sách Hay Đáng Đọc Trong Tháng: Fantasy và Khoa Học Viễn Tưởng', content: 'Một danh sách các cuốn sách fantasy và khoa học viễn tưởng đáng đọc trong tháng này.' },
    { title: 'Tặng Quà Cho Người Yêu: 10 Cuốn Sách Lãng Mạn Không Thể Bỏ Lỡ', content: 'Một danh sách các cuốn sách lãng mạn lý tưởng để tặng cho người yêu trong dịp đặc biệt.' },
    { title: 'Review Sách: Nhà Giả Kim của Paulo Coelho', content: 'Một bài đánh giá chi tiết về cuốn sách kinh điển Nhà Giả Kim của Paulo Coelho.' },
    { title: 'Làm Thế Nào Để Chọn Sách Cho Trẻ Em: 5 Bước Quan Trọng', content: 'Một hướng dẫn về cách chọn sách phù hợp cho trẻ em, bao gồm những điều cần lưu ý khi mua sách cho trẻ.' },
    { title: 'Câu Chuyện Đằng Sau Cuốn Sách: Harry Potter và Hòn Đá Phù Thủy', content: 'Một bài viết khám phá về quá trình viết nên cuốn tiểu thuyết nổi tiếng Harry Potter và Hòn Đá Phù Thủy của J.K. Rowling.' },
    { title: 'Chia Sẻ Sách Hay: Sapiens của Yuval Noah Harari', content: 'Một bài viết chia sẻ về cuốn sách Sapiens: Người Nắm Quyền của tác giả Yuval Noah Harari và những bài học quan trọng từ đó.' },
    { title: 'Lợi Ích Của Việc Đọc Sách: 5 Lý Do Bạn Nên Đọc Sách Hàng Ngày', content: 'Một bài viết về những lợi ích tuyệt vời mà việc đọc sách mang lại cho sức khỏe và sự phát triển cá nhân.' },
    { title: 'Bảng Xếp Hạng: Top 10 Cuốn Sách Bán Chạy Nhất', content: 'Một bảng xếp hạng về các cuốn sách bán chạy nhất trong thời gian gần đây, với các thể loại từ tiểu thuyết đến sách tự truyện.' },
    { title: 'Cách Chọn Sách Phù Hợp Cho Mình: 5 Bước Đơn Giản', content: 'Một hướng dẫn về cách chọn sách phù hợp với sở thích và nhu cầu đọc sách của bạn.' },
    { title: 'Cách Lựa Chọn Sách Phù Hợp Cho Trẻ Em', content: 'Một hướng dẫn chi tiết về cách lựa chọn sách phù hợp với độ tuổi và sở thích của trẻ em.' },
    { title: 'Top 5 Sách Kinh Doanh Hay Nhất Năm Nay', content: 'Một bài viết tổng hợp về 5 cuốn sách kinh doanh được đánh giá cao và đáng đọc nhất trong năm nay.' }
];

// Insert seed data into posts table
seedPosts.forEach((post) => {
    const query = `INSERT INTO posts (title, content) VALUES (?, ?)`;
    const values = [post.title, post.content];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Post ${post.title} inserted successfully.`);
        }
    });
});

