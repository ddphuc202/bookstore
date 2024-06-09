import Logo from '../../image/Khai_Tam.png';
const Footer = () => {
	return (
		<div className="first-footer d-flex">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-5 col-12 first-col">
						<a href="/" className="logo">
							<img className='Logo' width="38" height="31" src={Logo} alt="Nhã Nam" />
							<span>Bởi vì sách là thế giới</span>
						</a>
						<ul>
							<li>
								<svg className="icon">  </svg>
								<p>
									Số 59, Đỗ Quang, Trung Hoà, Cầu Giấy, Hà Nội.
								</p>
							</li>
							<li>
								<svg className="icon">  </svg>
								<a href="mailto:info@nhanam.vn">info@khaitam.vn</a>
							</li>
							<li>
								<svg className="icon"> </svg>
								<a className="phone" href="tel:02435146876">
									02435146876
								</a>
							</li>
							<li>
								<svg className="icon">  </svg>
								<a className="phone" href="tel:0903244248">
									0903244248
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-3 col-12 second-col">
						<h4 className="title-menu">
							<span>
								Giới thiệu
							</span>
						</h4>
						<ul className="list-menu">
							<li className="li_menu"><a href="/gioi-thieu" title="Về Nhã Nam">Về Khai Tâm</a></li>
							<li className="li_menu"><a href="/he-thong-hieu-sach" title="Hệ thống hiệu sách">Hệ thống hiệu sách</a></li>
							<li className="li_menu"><a href="/he-thong-cua-hang" title="Hệ thống phát h�&nbsp;nh">Hệ thống phát hành</a></li>
							<li className="li_menu"><a href="/tuyen-dung" title="Tuyển dụng">Tuyển dụng</a></li>
							<li className="li_menu"><a href="/lien-he-voi-chung-toi" title="Liên hệ với chúng tôi">Liên hệ với chúng tôi</a></li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-4 col-12 third-col">
						<h4 className="title-menu">
							<span>
								CHÍNH SÁCH <i className="fa fa-plus hidden" aria-hidden="true"></i>
							</span>
						</h4>
						<ul className="list-menu">
							<li className="li_menu"><a href="/chinh-sach" title="Chính sách bảo mật">Chính sách bảo mật</a></li>
							<li className="li_menu"><a href="/chinh-sach" title="Chính sách đổi trả/hoàn tiền">Chính sách đổi trả/hoàn tiền</a></li>
							<li className="li_menu"><a href="/chinh-sach" title="Chính sách thanh toán/ vận chuyển">Chính sách thanh toán/ vận chuyển</a></li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-12 col-12">
						<h4 className="title-menu faild">
							<span>
								Phương thức thanh toán
							</span>
						</h4>
						{/* <div className="payment">
						<img src="" data-src="" className="lazyload" alt="Phương thức thanh toán" />
					</div>
					<div className="payment" style="margin-top:20px;">
						<a href="http://online.gov.vn/Home/WebDetails/2504" title="Xác nhận bộ công thương">						
							<img src="" data-src="" className="lazyload" alt="Đã đăng ký bộ công thương" />
						</a>
					</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer;