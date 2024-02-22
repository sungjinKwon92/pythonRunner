import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getFiles = () => {
  return axios.get('/file').then(res => res.data);
};

export const uploadFile = (data:{filename:string,content:string})=>{
  return axios.post('/file', data).then(res => res.data);
}

export const updateFile = (data:{filename:string,content:string})=>{
    return axios.put('/file', data).then(res => res.data);
}