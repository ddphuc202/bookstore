import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const HeaderCustomer = (props) => {
    return (
        <header class="header">
            <div class="container child-container">
                <div class="nav-mobile d-xl-none d-inline-block"> </div>
                <div class="row">
                    <div class="col-lg-2 col-md-3">

                        <a href="/" class="logo">
                            <img width="64" height="62" src="//bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681" alt="Nhã Nam" />

                        </a>


                    </div>
                    <div class="col-9 col-md-3 col-xl-7 col-lg-6">
                        <div class="child-header header_nav_main">
                            <div class="d-block d-md-none bl-acc">
                                <div class="block-account">
                                <FontAwesomeIcon icon={faUser} />
                                    <div class="d-flex">

                                        <a href="/account/login">Đăng nhập</a>
                                        <a href="/account/register">Đăng ký</a>

                                    </div>
                                </div>
                            </div>
                            <div class="navigation-head">

                                <nav class="nav-horizontal">
                                    <ul class="item_big">
                                        <li class="nav-item active ">
                                            <a class="a-img" href="/" title="Trang chủ">
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li class="nav-item has-child  ">
                                            <a class="a-img caret-down" href="/tin-sach" title="Tin Sách">
                                                Tin Sách
                                            </a>
                                            <i class="fa fa-angle-down"></i>
                                            <ul class="item_small">
                                                <li>
                                                    <a class="" href="/tin-nha-nam" title="Tin Nhã Nam">
                                                        Tin Nhã Nam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/review-sach-cua-doc-gia" title="Review sách của độc giả">
                                                        Review sách của độc giả
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/review-sach-tren-bao-chi" title="Review sách trên báo chí">
                                                        Review sách trên báo chí
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/bien-tap-vien-gioi-thieu" title="Biên tập viên giới thiệu">
                                                        Biên tập viên giới thiệu
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item has-child   has-mega">
                                            <a class="a-img caret-down" href="/collections/all" title="Sách Nhã Nam">
                                                Sách Nhã Nam
                                            </a>
                                            <i class="fa fa-angle-down"></i>
                                            <div class="mega-content">
                                                <ul class="level0">


                                                    <li class="level1 parent item">
                                                        <h4><a href="/hu-cau" title="Hư cấu">Hư cấu</a><span class="icon fa fa-angle-down"></span></h4>
                                                        <ul class="level1">

                                                            <li class="level2"><a href="/van-hoc-hien-dai" title="Văn học hiện đại">Văn học hiện đại</a> </li>

                                                            <li class="level2"><a href="/van-hoc-kinh-dien" title="Văn học kinh điển">Văn học kinh điển</a> </li>

                                                            <li class="level2"><a href="/lich-su" title="Văn học thiếu nhi">Văn học thiếu nhi</a> </li>

                                                            <li class="level2"><a href="/lang-man" title="Lãng mạn">Lãng mạn</a> </li>

                                                            <li class="level2"><a href="/ky-ao" title="Kỳ ảo">Kỳ ảo</a> </li>

                                                            <li class="level2"><a href="/trinh-tham-kinh-di" title="Trinh thám - Kinh dị">Trinh thám - Kinh dị</a> </li>

                                                            <li class="level2"><a href="/vien-tuong" title="Khoa học Viễn tưởng">Khoa học Viễn tưởng</a> </li>

                                                            <li class="level2"><a href="/phieu-luu-ly-ky" title="Phiêu lưu ly kỳ">Phiêu lưu ly kỳ</a> </li>

                                                            <li class="level2"><a href="/tan-van" title="Tản văn">Tản văn</a> </li>

                                                            <li class="level2"><a href="/truyen-tranh-graphic-novel" title="Truyện tranh (graphic novel)">Truyện tranh (graphic novel)</a> </li>

                                                            <li class="level2"><a href="/sach-tranh-picture-book" title="Sách tranh (Picture book)">Sách tranh (Picture book)</a> </li>

                                                            <li class="level2"><a href="/tho-kich" title="Thơ - kịch">Thơ - kịch</a> </li>

                                                            <li class="level2"><a href="/light-novel" title="Light novel">Light novel</a> </li>

                                                            <li class="level2"><a href="/sach-to-mau" title="Sách tô màu">Sách tô màu</a> </li>

                                                        </ul>
                                                    </li>



                                                    <li class="level1 parent item">
                                                        <h4><a href="/phi-hu-cau" title="Phi hư cấu">Phi hư cấu</a><span class="icon fa fa-angle-down"></span></h4>
                                                        <ul class="level1">

                                                            <li class="level2"><a href="/triet-hoc" title="Triết học">Triết học</a> </li>

                                                            <li class="level2"><a href="/lich-su-1" title="Sử học">Sử học</a> </li>

                                                            <li class="level2"><a href="/khoa-hoc" title="Khoa học">Khoa học</a> </li>

                                                            <li class="level2"><a href="/kinh-doanh" title="Kinh doanh">Kinh doanh</a> </li>

                                                            <li class="level2"><a href="/kinh-te-chinh-tri" title="Kinh tế chính trị">Kinh tế chính trị</a> </li>

                                                            <li class="level2"><a href="/ky-nang" title="Kỹ năng">Kỹ năng</a> </li>

                                                            <li class="level2"><a href="/nghe-thuat" title="Nghệ thuật">Nghệ thuật</a> </li>

                                                            <li class="level2"><a href="/nuoi-day-con" title="Nuôi dạy con">Nuôi dạy con</a> </li>

                                                            <li class="level2"><a href="/tieu-luan-phe-binh" title="Tiểu luận - phê bình">Tiểu luận - phê bình</a> </li>

                                                            <li class="level2"><a href="/phat-trien-ban-than" title="Tâm lý ứng dụng">Tâm lý ứng dụng</a> </li>

                                                            <li class="level2"><a href="/tam-ly-hoc" title="Tâm lý học">Tâm lý học</a> </li>

                                                            <li class="level2"><a href="/hoi-ky" title="Hồi ký">Hồi ký</a> </li>

                                                            <li class="level2"><a href="/y-hoc-suc-khoe" title="Y học - Sức khỏe">Y học - Sức khỏe</a> </li>

                                                            <li class="level2"><a href="/tam-linh-ton-giao" title="Tâm linh - Tôn giáo">Tâm linh - Tôn giáo</a> </li>

                                                            <li class="level2"><a href="/kien-thuc-pho-thong" title="Kiến thức phổ thông">Kiến thức phổ thông</a> </li>

                                                            <li class="level2"><a href="/phong-cach-song" title="Phong cách sống">Phong cách sống</a> </li>

                                                        </ul>
                                                    </li>



                                                    <li class="level1 parent item">
                                                        <h4><a href="/thieu-nhi" title="Thiếu nhi">Thiếu nhi</a><span class="icon fa fa-angle-down"></span></h4>
                                                        <ul class="level1">

                                                            <li class="level2"><a href="/0-5-tuoi" title="0-5 tuổi">0-5 tuổi</a> </li>

                                                            <li class="level2"><a href="/6-8-tuoi" title="6-8 tuổi">6-8 tuổi</a> </li>

                                                            <li class="level2"><a href="/9-12-tuoi" title="9-12 tuổi">9-12 tuổi</a> </li>

                                                            <li class="level2"><a href="/13-15-tuoi" title="13-15 tuổi">13-15 tuổi</a> </li>

                                                        </ul>
                                                    </li>



                                                    <li class="level1 parent item">
                                                        <h4><a href="/phan-loai-khac" title="Phân loại khác">Phân loại khác</a><span class="icon fa fa-angle-down"></span></h4>
                                                        <ul class="level1">

                                                            <li class="level2"><a href="/sach-ban-chay" title="Sách bán chạy">Sách bán chạy</a> </li>

                                                            <li class="level2"><a href="/sach-moi-xuat-ban" title="Sách mới xuất bản">Sách mới xuất bản</a> </li>

                                                            <li class="level2"><a href="/sach-sap-xuat-ban" title="Sách sắp xuất bản">Sách sắp xuất bản</a> </li>

                                                            <li class="level2"><a href="/sach-duoc-giai-thuong" title="Sách được giải thưởng">Sách được giải thưởng</a> </li>

                                                            <li class="level2"><a href="/sach-pop-up-lift-the-flaps" title="Sách pop-up, lift-the-flaps">Sách pop-up, lift-the-flaps</a> </li>

                                                            <li class="level2"><a href="/sach-chu-de-dong-duong" title="Nghiên cứu Việt Nam">Nghiên cứu Việt Nam</a> </li>

                                                            <li class="level2"><a href="/viet-nam-danh-tac" title="Việt Nam danh tác">Việt Nam danh tác</a> </li>

                                                            <li class="level2"><a href="/tac-gia-viet-nam" title="Tác giả Việt Nam">Tác giả Việt Nam</a> </li>

                                                            <li class="level2"><a href="/ban-dac-biet" title="Bản đặc biệt">Bản đặc biệt</a> </li>

                                                            <li class="level2"><a href="/phu-kien-qua-tang" title="Phụ kiện - Quà tặng">Phụ kiện - Quà tặng</a> </li>

                                                        </ul>
                                                    </li>


                                                </ul>
                                            </div>			</li>
                                        <li class="nav-item ">
                                            <a class="a-img" href="/tac-gia" title="Tác giả">
                                                Tác giả
                                            </a>
                                        </li>
                                        <li class="nav-item has-child  ">
                                            <a class="a-img caret-down" href="/cuoc-thi" title="Cuộc Thi">
                                                Cuộc Thi
                                            </a>
                                            <i class="fa fa-angle-down"></i>
                                            <ul class="item_small">
                                                <li>
                                                    <a class="" href="/ai-do-doc-cung-ta" title="AI ĐÓ ĐỌC CÙNG TA">
                                                        AI ĐÓ ĐỌC CÙNG TA
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="a-img" href="/gioi-thieu" title="Về Nhã Nam">
                                                Về Nhã Nam
                                            </a>
                                        </li>
                                        <li class="nav-item has-child  ">
                                            <a class="a-img caret-down" href="/lien-he" title="Liên hệ">
                                                Liên hệ
                                            </a>
                                            <i class="fa fa-angle-down"></i>
                                            <ul class="item_small">
                                                <li>
                                                    <a class="" href="/he-thong-hieu-sach" title="Hệ Thống Hiệu Sách">
                                                        Hệ Thống Hiệu Sách
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/he-thong-cua-hang" title="Hệ Thống Phát Hành">
                                                        Hệ Thống Phát Hành
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/gui-thu-cho-nha-nam" title="Gửi Thư Cho Nhã Nam">
                                                        Gửi Thư Cho Nhã Nam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="" href="/tuyen-dung" title="Tuyển Dụng">
                                                        Tuyển Dụng
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <script>
                                $(document).ready(function() {
		var margin_left = 0;
                                $('#prev').on('click', function(e) {
                                    e.preventDefault();
                                animateMargin( 190 );
		});
                                $('#next').on('click', function(e) {
                                    e.preventDefault();
                                animateMargin( -190 );
		});
		const animateMargin = ( amount ) => {
                                    margin_left = Math.min(0, Math.max(getMaxMargin(), margin_left + amount));
                                $('ul.item_big').animate({
                                    'margin-left': margin_left
			}, 300);
		};
		const getMaxMargin = () =>
                                $('ul.item_big').parent().width() - $('ul.item_big')[0].scrollWidth;

                                $('.navigation-head li.has-child').hover(
                                function(){$('body').addClass('current')},
                                function(){$('body').removeClass('current')}
                                )
	})
                            </script> */}
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 col-lg-4 col-12 mb-block">
                        <div class="search-icon-mb d-md-none d-inline-block">
                            <svg class="icon">  </svg>
                        </div>
                        <form action="/search" class="input-group search-bar" role="search">
                            <input type="text" aria-label="Tìm sản phẩm" name="query" value="" autocomplete="off" placeholder="Tìm kiếm..." class="search-auto input-group-field auto-search" required="" />
                                <input type="hidden" name="type" value="product" />
                                    <button class="btn search-button" aria-label="Justify">
                                        <svg class="icon">  </svg>
                                    </button>
                                </form>
                                <div class="user-header">
                                <FontAwesomeIcon icon={faUser} />
                                    <div class="account-header">

                                        <a href="/account/login">Đăng nhập</a>
                                        <a href="/account/register">Đăng ký</a>

                                    </div>
                                </div>
                                <a class="cart-head" href="/cart" title="Giỏ hàng">
                                <FontAwesomeIcon icon={faCartShopping} />
                                    <span class="count_item count_item_pr">2</span>
                                </a>
                            </div>
                    </div>
                </div>
        </header>
    )
    
}
export default Header;