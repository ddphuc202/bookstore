import Header from "../../components/Customer/Header"
import SidebarInfoCustomer from "../../components/Customer/SidebarInfoCustomer";
import Footer from "../../components/Customer/Footer";
import { useEffect, useState } from "react";
import { getCustomerById, changePassword } from "../../services/CustomerServices";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import { toast } from "react-toastify";

const ChangePasswordCustomer = () => {

    const [data, setData] = useState([])
    const [currentPass, setCurrentPass] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const navigate = useNavigate();

    const handleClick = (event) => {
        // Check if the current password is correct
        bcrypt.compare(currentPass, data.password, function (err, result) {
            if (err) {
                console.error(err);
                toast.error("Chưa khớp mật khẩu cũ!")
                return;
            }

            if (!result) {
                toast.error("Chưa khớp mật khẩu cũ!")
                return;
            }

            if (password !== confirmPass) {
                toast.error("Mật khẩu mới chưa khớp");
                return;
            }

            changePassword(localStorage.getItem("userId"), confirmPass, navigate);
        });
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
                            <p><b>Nhập mật khẩu cũ</b></p>
                            <input value={currentPass}
                                onChange={event => setCurrentPass(event.target.value)}
                                className="form-control" style={{ width: "400px" }} type="password" />
                            <br></br>
                            <p><b>Nhập mật khẩu mới</b></p>
                            <input value={password}
                                onChange={event => setPassword(event.target.value)}
                                className="form-control" style={{ width: "400px" }} type="password" />
                            <br></br>
                            <p><b>Nhập lại mật khẩu </b></p>
                            <input value={confirmPass}
                                onChange={event => setConfirmPass(event.target.value)}
                                className="form-control" style={{ width: "400px" }} type="password" />
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
export default ChangePasswordCustomer;