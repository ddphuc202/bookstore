import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCustomerById } from "../../services/CustomerServices";
const SidebarInfoCustomer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getCustomerById(localStorage.getItem("userId"), setData)
    }, [])
    return (
        <>
            <div class="col-xs-12 col-sm-12 col-lg-3 col-left-ac" style={{ borderRight: "solid 1px green" }}>
                <div class="block-account">
                    <h5 class="title-account">Trang tài khoản</h5>
                    <p><b>Xin chào, </b> <span style={{ color: "#228b22" }}>{data.name}</span>!</p>
                    <ul>
                        <li>
                            <Link class="title-info active" to={"/info-customer"}>Thông tin tài khoản</Link>
                        </li>
                        <li>
                            <Link class="title-info" to={"/orders"}>Đơn hàng của bạn</Link>
                        </li>
                        <li>
                            <Link class="title-info" to={"/change-password"}>Đổi mật khẩu</Link>
                        </li>
                        <li>
                            <Link class="title-info" to={"/change-info"}>Sửa địa chỉ và số điện thoại</Link>
                        </li>
                        <li>
                            <Link class="title-info" to={'/logout'}>Đăng xuất</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SidebarInfoCustomer;