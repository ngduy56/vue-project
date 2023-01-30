import axiosClient from "@/axios/axiosClient";

const authService = {
  uploadAvatar: (params) => {
    const url = "/users/upload";
    return axiosClient.post(url, params);
  },
  login: (params) => {
    const url = "/auth/login";
    return axiosClient.post(url, params);
  },
  signUp: (params) => {
    const url = "/auth/signup";
    return axiosClient.post(url, params);
  },
  getUser: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  getUserList: () => {
    const url = "/users/";
    return axiosClient.get(url);
  },
  approval: (id, status) => {
    const url = "/users/status";
    return axiosClient.post(url, { id, status });
  },
};
export default authService;
