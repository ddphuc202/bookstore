import axios from "axios";
import { useNavigate } from 'react-router-dom';


const instance = axios.create({
    baseURL: 'http://localhost:3030',
});

// interceptor để can thiệp trước khi gửi request sẽ gắn token vào header và gửi đi
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});



const baseURL = 'http://localhost:3030';

export { instance, baseURL };