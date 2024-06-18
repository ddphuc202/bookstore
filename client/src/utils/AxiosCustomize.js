import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3030'
});

const baseURL =
    'http://localhost:3030'


export { instance, baseURL };