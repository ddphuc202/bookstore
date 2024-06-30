import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { handleRegister } from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleRegisterCustomer = (event) => {
        event.preventDefault();
        handleRegister(name, email, password, address, phone, navigate)
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div className="divider d-flex align-items-center my-4">
                                <h2 className="text-center fw-bold mx-3 mb-0">Đăng Ký</h2>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Nhập Họ Tên..." value={name} onChange={event => setName(event.target.value)} />
                                <label className="form-label" for="form3Example3">Họ và Tên</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Nhập Email..." value={email} onChange={event => setEmail(event.target.value)} />
                                <label className="form-label" for="form3Example3">Địa chỉ Email</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Nhập địa chỉ..." value={address} onChange={event => setAddress(event.target.value)} />
                                <label className="form-label" for="form3Example3">Địa chỉ</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Nhập số điện thoại..." value={phone} onChange={event => setPhone(event.target.value)} />
                                <label className="form-label" for="form3Example3">Số điện thoại</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Nhập mật khẩu..." value={password} onChange={event => setPassword(event.target.value)} />
                                <label className="form-label" for="form3Example4">Mật khẩu</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button onClick={(event) => handleRegisterCustomer(event)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Đăng ký</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Đã có tài khoản? <a href="/login"
                                    className="link-danger">Đăng nhập</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;