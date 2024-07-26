import Header from "../../components/Customer/Header"
import SidebarInfoCustomer from "../../components/Customer/SidebarInfoCustomer";
import Footer from "../../components/Customer/Footer";
import { useEffect, useState } from "react";
import { getCustomerById, updateCustomerByID } from "../../services/CustomerServices";

const ChangeInfoCustomer = () => {

    const [data, setData] = useState([])

    const handleClick = (event) => {
        updateCustomerByID(localStorage.getItem("userId"), data)
    }

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
                        <h1 class="title-head margin-top-0">Sửa thông tin tài khoản</h1>
                        <div class="content-main">
                            <p><b>Số điện thoại</b></p>
                            <input value={data.phone}
                                onChange={event => setData({ ...data, phone: event.target.value })}
                                className="form-control" style={{ width: "400px" }} type="text" />
                            <br></br>
                            <p><b>Địa chỉ</b></p>
                            <textarea value={data.address}
                                onChange={event => setData({ ...data, address: event.target.value })}
                                className="form-control" style={{ width: "400px", height: "75px" }} type="textarea" />
                            <br></br>
                            <button className="btn btn-success" onClick={event => handleClick()}>Lưu thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </>
    )
}
export default ChangeInfoCustomer;