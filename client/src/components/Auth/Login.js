import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { handleLogin } from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email && !password) {
            toast.error('Vui lòng nhập email và password!');
            return;
        }
        if (!email) {
            toast.error('Vui lòng nhập email!');
            return;
        }
        if (!password) {
            toast.error('Vui lòng nhập mật khẩu!');
            return;
        }
        handleLogin(email, password, navigate);
    }

    return (
        <>
            <ToastContainer />
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
                                    <h2 className="text-center fw-bold mx-3 mb-0">Đăng Nhập</h2>
                                </div>

                                {/* <!-- Email input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Nhập Email..." value={email} onChange={(event) => { setEmail(event.target.value) }} />
                                    <label className="form-label" >Địa chỉ Email</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div data-mdb-input-init className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Nhập mật khẩu..." value={password} onChange={(event) => { setPassword(event.target.value) }} />
                                    <label className="form-label" >Mật khẩu</label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={(event) => handleSubmit(event)} >Đăng nhập</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Chưa có tài khoản? <a href="/register"
                                        className="link-danger">Đăng ký</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;