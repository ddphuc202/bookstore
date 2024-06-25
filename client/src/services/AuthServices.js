import { jwtDecode } from "jwt-decode";
import { instance } from "../utils/AxiosCustomize";

const handleLogin = (email, password, navigate) => {
    let data = {
        email: email,
        password: password
    };
    instance.post('/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            var user = jwtDecode(res.data.token);
            localStorage.setItem('userId', user.userId);
            localStorage.setItem('userRole', user.userRole);
            localStorage.setItem('userName', user.userName);
            navigate('/');
        }).catch(err => {
            alert('Đăng nhập thất bại');
        });
};

const handleLogout = (navigate) => {
    localStorage.clear();
    navigate('/');
};

export { handleLogin, handleLogout };