import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const loadFilesAPI = () => {
  return axios.get("/file").then((res) => res.data);
};

export const loadFileAPI = (id:string) => {
  return axios.get(`/file/${id}`).then((res) => res.data);
}

export const addFileAPI = (data: { filename: string; content: string }) => {
  return axios.post("/file", data).then((res) => res.data);
};

// export const updateFileAPI = (data: { filename: string; content: string }) => {
//   return axios.put("/file", data).then((res) => res.data);
// };
