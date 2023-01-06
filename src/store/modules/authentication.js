import axiosClient from "@/axios/axiosClient";
const state = () => ({
  user: {},
  loading: false,
});
const getters = {
  getUser: (state) => state.user,
  loading: (state) => state.loading,
};
const mutations = {
  SIGN_UP(state) {
    state.loading = true;
  },
};
const actions = {
  async signUp({ commit }, data) {
    const registerForm = {
      username: data.username,
      fullname: data.fullname,
      address: data.city,
      describe_yourself: data.about_me,
      birthday: data.dob,
      status: 0,
      password: data.password,
    };
    try {
      const response = await axiosClient.post("/auth/signup", registerForm);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    commit("SIGN_UP", data);
  },
  async getUserList() {
    try {
      const response = await axiosClient.get("/auth/users");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
