import axios from "axios";
import {File} from "../interfaces";

axios.defaults.baseURL = "http://localhost:5106/api";
axios.defaults.withCredentials = true;

export const addFileAPI = (data: File) => {
  return axios.post("/file/addfile", data).then((res) => res.data);
};