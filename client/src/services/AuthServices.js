import { jwtDecode } from "jwt-decode";
import { instance } from "../utils/AxiosCustomize";
import { toast } from "react-toastify";

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
            if (localStorage.getItem('userRole') === 'customer') {
                navigate('/');
            } else {
                navigate('/manage');
            }

        }).catch(err => {
            toast.error('Đăng nhập thất bại');
        });
};

const handleRegister = (name, email, password, address, phone, navigate) => {
    let data = {
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phone
    };
    instance.post('/register', data).then(res => {
        toast.success('Đăng ký thành công');
        navigate('/login');
    }).catch(err => {
        toast.error('Đăng ký thất bại');
    })
}


const handleLogout = (navigate) => {
    if (localStorage.getItem('userRole') === 'customer') {
        localStorage.clear();
        navigate('/');
    } else {
        localStorage.clear();
        navigate('/login');
    }
};

export { handleLogin, handleLogout, handleRegister };