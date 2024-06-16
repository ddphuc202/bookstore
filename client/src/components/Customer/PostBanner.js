import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../image/khai-tam-about.png'
import '../../styles/PostBanner.css'
const PostBanner = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};


	return (
		<div>


			<section className="section_blog_first lazyload" >
				<div className="container">
					<div className="row">

						<div className="col-md-12 col-lg-12 col-xl-8 col-12">
							<div className="swiper-container slide-blog-large swiper-button-main">
								<Slider {...settings}>
									<div className="swiper-slide">
										<div className="d-none">
										</div>
										<article className="item_blog_base first">
											<a className="thumb "
												href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
												title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?">
												<img width="840" height="533"
													src={image}
													alt="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
													className="lazyload img-responsive" />
											</a>
											<div className="content_blog">
												<h3><a href="/su-kien-ra-mat-cuon-sach-chip-war-cuoc-chien-vi-mach-ve-lai-ban-do-ban-dan-toan-cau-viet-nam-o-dau"
													title="Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi mạch”: Vẽ lại bản đồ bán dẫn to�&nbsp;n cầu: Việt Nam ở đâu?"
													className="a-title">Sự kiện ra mắt cuốn sách “Chip War - Cuộc chiến vi
													mạch”: Vẽ lại bản đồ bán dẫn toàn cầu: Việt Nam ở đâu?</a>
												</h3>
												<span>
													Thứ Hai,
													27/05/2024</span>
											</div>
										</article>
									</div>




									<div className="swiper-slide">
										<div className="d-none">
										</div>
										<article className="item_blog_base first">
											<a className="thumb " href="/cay-cam-ngot-cua-toi-sap-co-phan-2"
												title="“CÂY CAM NGỌT CỦA TÔI” SẮP CÓ PHẦN 2">
												<img width="840" height="533" src={image}
													alt="“CÂY CAM NGỌT CỦA TÔI” SẮP CÓ PHẦN 2"
													className="lazyload img-responsive" />
											</a>
											<div className="content_blog">
												<h3><a href="/cay-cam-ngot-cua-toi-sap-co-phan-2"
													title="“CÂY CAM NGỌT CỦA TÔI” SẮP CÓ PHẦN 2" className="a-title">“CÂY
													CAM NGỌT CỦA TÔI” SẮP CÓ PHẦN 2</a></h3>
												<span>
													Thứ Ba,
													07/05/2024</span>
											</div>
										</article>
									</div>




									<div className="swiper-slide">
										<div className="d-none">
										</div>
										<article className="item_blog_base first">
											<a className="thumb "
												href="/doc-gia-hai-mien-nam-bac-no-nuc-den-hoi-sach-nha-nam-chao-he-2024"
												title="Độc giả hai miền Nam Bắc nô nức đến Hội sách Nhã Nam Ch�&nbsp;o hè 2024">
												<img width="840" height="533" src={image}
													alt="Độc giả hai miền Nam Bắc nô nức đến Hội sách Nhã Nam Ch�&nbsp;o hè 2024"
													className="lazyload img-responsive" />
											</a>
											<div className="content_blog">
												<h3><a href="/doc-gia-hai-mien-nam-bac-no-nuc-den-hoi-sach-nha-nam-chao-he-2024"
													title="Độc giả hai miền Nam Bắc nô nức đến Hội sách Nhã Nam Ch�&nbsp;o hè 2024"
													className="a-title">Độc giả hai miền Nam Bắc nô nức đến Hội sách Nhã Nam
													Chào hè 2024</a></h3>
												<span>
													Thứ Tư,
													10/04/2024</span>
											</div>
										</article>
									</div>
								</Slider>
							</div>
						</div>





						<div className="d-list col-md-12 col-lg-12 col-xl-4 col-12">
							<div className="item">






								<div className="d-none">

								</div>
								<article className="item_blog_base first">
									<a className="thumb " href="/khong-can-phai-la-nha-kinh-te-hoc-moi-doc-duoc-economix"
										title="KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX">
										<img width="196" height="125"
											src={image}
											data-src=""
											alt="KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX"
											className="lazyload img-responsive" />
									</a>
									<div className="content_blog">
										<h3><a href="/khong-can-phai-la-nha-kinh-te-hoc-moi-doc-duoc-economix"
											title="KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX"
											className="a-title">KHÔNG CẦN PHẢI LÀ NHÀ KINH TẾ HỌC MỚI ĐỌC ĐƯỢC ECONOMIX</a>
										</h3>
										<span>
											Thứ Năm, 16/05/2024</span>
									</div>
								</article>
							</div>
							<div className="item">













								<div className="d-none">

								</div>
								<article className="item_blog_base first">
									<a className="thumb " href="/bat-tre-dong-xanh-khong-phai-cu-hit-dau-tien-cua-salinger"
										title="“BẮT TRẺ ĐỒNG XANH” KHÔNG PHẢI “CÚ HIT” ĐẦU TIÊN CỦA SALINGER">
										<img width="196" height="125"
											src={image}
											alt="“BẮT TRẺ ĐỒNG XANH” KHÔNG PHẢI “CÚ HIT” ĐẦU TIÊN CỦA SALINGER"
											className="lazyload img-responsive" />
									</a>
									<div className="content_blog">
										<h3><a href="/bat-tre-dong-xanh-khong-phai-cu-hit-dau-tien-cua-salinger"
											title="“BẮT TRẺ ĐỒNG XANH” KHÔNG PHẢI “CÚ HIT” ĐẦU TIÊN CỦA SALINGER"
											className="a-title">“BẮT TRẺ ĐỒNG XANH” KHÔNG PHẢI “CÚ HIT” ĐẦU TIÊN CỦA
											SALINGER</a></h3>
										<span>
											Thứ Năm,
											16/05/2024</span>
									</div>
								</article>
							</div>
							<div className="item">













								<div className="d-none">

								</div>
								<article className="item_blog_base first">
									<a className="thumb "
										href="/ten-cua-doa-hong-kho-tang-kien-thuc-ve-triet-hoc-ly-luan-ton-giao-lich-su-an-sau-mot-cot-truyen-trinh-tham-day-thach-thuc"
										title="Tên của đoá hồng: Kho t�&nbsp;ng kiến thức về triết học, lý luận, tôn giáo, lịch sử ẩn sau một cốt truyện trinh thám đầy thách thức">
										<img width="196" height="125"
											src={image}
											alt="Tên của đoá hồng: Kho t�&nbsp;ng kiến thức về triết học, lý luận, tôn giáo, lịch sử ẩn sau một cốt truyện trinh thám đầy thách thức"
											className="lazyload img-responsive" />
									</a>
									<div className="content_blog">
										<h3><a href="/ten-cua-doa-hong-kho-tang-kien-thuc-ve-triet-hoc-ly-luan-ton-giao-lich-su-an-sau-mot-cot-truyen-trinh-tham-day-thach-thuc"
											title="Tên của đoá hồng: Kho t�&nbsp;ng kiến thức về triết học, lý luận, tôn giáo, lịch sử ẩn sau một cốt truyện trinh thám đầy thách thức"
											className="a-title">Tên của đoá hồng: Kho t�&nbsp;ng kiến thức về triết học, lý
											luận, tôn giáo, lịch sử ẩn sau một cốt truyện trinh thám đầy thách thức</a>
										</h3>
										<span>
											Thứ Bảy,
											04/05/2024</span>
									</div>
								</article>
							</div>
							<div className="item">













								<div className="d-none">

								</div>
								<article className="item_blog_base first">
									<a className="thumb "
										href="/5-bi-quyet-duong-am-dat-gia-cham-soc-da-hieu-qua-ngay-trong-mua-dong"
										title="5 bí quyết dưỡng ẩm đắt giá - Chăm sóc da hiệu quả ngay trong mùa đông">
										<img width="196" height="125"
											src={image}
											alt="5 bí quyết dưỡng ẩm đắt giá - Chăm sóc da hiệu quả ngay trong mùa đông"
											className="lazyload img-responsive" />
									</a>
									<div className="content_blog">
										<h3><a href="/5-bi-quyet-duong-am-dat-gia-cham-soc-da-hieu-qua-ngay-trong-mua-dong"
											title="5 bí quyết dưỡng ẩm đắt giá - Chăm sóc da hiệu quả ngay trong mùa đông"
											className="a-title">5 bí quyết dưỡng ẩm đắt giá - Chăm sóc da hiệu quả ngay
											trong mùa đông</a></h3>
										<span>
											Thứ Hai,
											20/11/2023</span>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

	)
}
export default PostBanner;