import image from '../../image/khai-tam-about.png'
import '../../styles/About.css'
const AboutPage = () => {

	return (
		<>
			<section className="section_info">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-12 order-1 order-md-1 order-lg-2">
							<figure className="d-block">
								<img className="lazyload" width="625" height="386"
									src={image}
									alt="Khai Tâm - Bởi vì sách là thế giới" />
							</figure>
						</div>
						<div className="col-lg-6 col-12 order-2 order-md-2 order-lg-1">
							<h2>
								Khai Tâm
							</h2>
							<span>
								Bởi vì sách là thế giới
							</span>
							<div className="short-content">
								Khai Tâm, tên đầy đủ là Công ty Cổ phần Văn hóa và Truyền thông Khai Tâm,
								gia nhập thị trường sách Việt Nam vào tháng 4 năm 2024.
								Ngay từ cuốn sách đầu tiên, độc giả đã dành sự quan tâm và yêu mến cho một
								thương hiệu sách mới mẻ mang trong mình khát vọng góp phần tạo lập diện mạo mới cho xuất bản
								văn học tại Việt Nam.
							</div>
							<a className="btn button-default" href="/about-page">Xem thêm</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default AboutPage;