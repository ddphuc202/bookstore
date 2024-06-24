import { jwtDecode } from "jwt-decode";
import { instance } from "../utils/AxiosCustomize";

const handleLogin = (email, password, navigate) => {
    let data = {
        email: email,
        password: password
    }
    console.log(data);
    instance.post('/login', data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            console.log(localStorage.getItem('token'));

            var user = jwtDecode(res.data.token);
            console.log(user);
            localStorage.setItem('userId', user.userId);
            localStorage.setItem('userType', user.userType);
            navigate('/')
        })
}

const handleLogout = (navigate) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    navigate('/');
}

export { handleLogin, handleLogout }