import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9999/",
  // headers: {
  //   "Content-Type": "application/json",
  // },
  withCredentials: false,
});
axiosClient.interceptors.request.use((config) => config);
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
