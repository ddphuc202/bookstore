import { Link } from "react-router-dom";
import Footer from "../../components/Customer/Footer";
import Header from "../../components/Customer/Header";
import '../../styles/InfoCustomer.css';
import { useEffect, useState } from "react";
import { getCustomerById } from "../../services/CustomerServices";
import SidebarInfoCustomer from "../../components/Customer/SidebarInfoCustomer";

const InfoCustomer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCustomerById(localStorage.getItem("userId"), setData)
    }, [])

    return (
        <>
            <Header />
            <div style={{ height: "60px", backgroundImage: "url(https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/background-banner.jpg?1704690471681)" }}></div>
            <div class="container" style={{ marginTop: "40px" }}>
                <div class="row">
                    <SidebarInfoCustomer />
                    <div class="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
                        <h1 class="title-head margin-top-0">Thông tin tài khoản</h1>
                        <div class="content-main">
                            <p><b>Họ tên:</b> {data.name}</p>
                            <p><b>Email: </b>  {data.email} </p>
                            <p><b>Số điện thoại: </b> {data.phone}</p>
                            <p><b>Địa chỉ: </b> {data.address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </>
    )
}
export default InfoCustomer;