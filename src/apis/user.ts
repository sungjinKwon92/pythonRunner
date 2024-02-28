import axios from "axios";
import { User } from "../interfaces";

axios.defaults.baseURL = "http://localhost:5106/api";
axios.defaults.withCredentials = true;

export const signUpAPI = (data:User) => {
    return axios.post('/user/signup', data).then((res) => res.data);
}

export const loginAPI = (data:User) => {
    return axios.post('/user/login', data).then((res)=> res.data);
}
