import { Link } from "react-router-dom";
import Footer from "../../components/Customer/Footer";
import Header from "../../components/Customer/Header";
import '../../styles/InfoCustomer.css';

const InfoCustomer = () => {
    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <div class="container" style={{ marginTop: "40px" }}>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
                        <div class="block-account">
                            <h5 class="title-account">Trang tài khoản</h5>
                            <p><b>Xin chào, </b> <span style={{ color: "#228b22" }}>Khanh Vu</span>!</p>
                            <ul>
                                <li>
                                    <Link class="title-info active" href="">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link class="title-info" to={"/orders"}>Đơn hàng của bạn</Link>
                                </li>
                                <li>
                                    <Link class="title-info" href="">Đổi mật khẩu</Link>
                                </li>
                                <li>
                                    <Link class="title-info" to={'/logout'}>Đăng xuất</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
                        <h1 class="title-head margin-top-0">Thông tin tài khoản</h1>
                        <div class="content-main">
                            <p><b>Họ tên:</b>  Khanh Vu</p>
                            <p><b>Email:</b> khanhbi345@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default InfoCustomer;