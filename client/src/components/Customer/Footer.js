const Footer = (props) =>{
    return(
        <div class="first-footer d-flex">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-5 col-12 first-col">
					<a href="/" class="logo">	
						<img src="images/logo.png" alt="Nhã Nam" />
						<span>Bởi vì sách là thế giới</span>
					</a>
					<ul>
						<li>
							<svg class="icon">  </svg>
							<p>
								Số 59, Đỗ Quang, Trung Hoà, Cầu Giấy, Hà Nội.
							</p>
						</li>
						<li>
							<svg class="icon">  </svg>
							<a href="mailto:info@nhanam.vn">info@nhanam.vn</a>
						</li>
						<li>
							<svg class="icon"> </svg>
							<a class="phone" href="tel:02435146876">
								02435146876
							</a>
						</li>
						<li>
							<svg class="icon">  </svg>
							<a class="phone" href="tel:0903244248">
								0903244248
							</a>
						</li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-3 col-12 second-col">
					<h4 class="title-menu">
						<span>
							Giới thiệu 
						</span>
					</h4>
					<ul class="list-menu">
						<li class="li_menu"><a href="/gioi-thieu" title="Về Nhã Nam">Về Nhã Nam</a></li>
						<li class="li_menu"><a href="/he-thong-hieu-sach" title="Hệ thống hiệu sách">Hệ thống hiệu sách</a></li>
						<li class="li_menu"><a href="/he-thong-cua-hang" title="Hệ thống phát h�&nbsp;nh">Hệ thống phát h�&nbsp;nh</a></li>
						<li class="li_menu"><a href="/tuyen-dung" title="Tuyển dụng">Tuyển dụng</a></li>
						<li class="li_menu"><a href="/lien-he-voi-chung-toi" title="Liên hệ với chúng tôi">Liên hệ với chúng tôi</a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-4 col-12 third-col">
					<h4 class="title-menu">
						<span>
							CHÍNH SÁCH <i class="fa fa-plus hidden" aria-hidden="true"></i>
						</span>
					</h4>
					<ul class="list-menu">
						<li class="li_menu"><a href="/chinh-sach" title="Chính sách bảo mật">Chính sách bảo mật</a></li>
						<li class="li_menu"><a href="/chinh-sach" title="Chính sách đổi trả/hoàn tiền">Chính sách đổi trả/hoàn tiền</a></li>
						<li class="li_menu"><a href="/chinh-sach" title="Chính sách thanh toán/ vận chuyển">Chính sách thanh toán/ vận chuyển</a></li>
					</ul>
				</div>

				<div class="col-lg-3 col-md-12 col-12">
					<h4 class="title-menu faild">
						<span>
							Phương thức thanh toán 
						</span>
					</h4>
					{/* <div class="payment">
						<img src="" data-src="" class="lazyload" alt="Phương thức thanh toán" />
					</div>
					<div class="payment" style="margin-top:20px;">
						<a href="http://online.gov.vn/Home/WebDetails/2504" title="Xác nhận bộ công thương">						
							<img src="" data-src="" class="lazyload" alt="Đã đăng ký bộ công thương" />
						</a>
					</div> */}
				</div>
			</div>
		</div>
	</div>
    )
}
export default Footer;