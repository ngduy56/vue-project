import axiosClient from "@/axios/axiosClient";
import { setUserId, removeUserId } from "@/utils/localStorage";
import toast from "@/components/toast/toast";
const state = () => ({
  user: {},
  currentUser: {},
  avatarUser: "",
  total: [],
  totalPage: 1,
  pageNum: 1,
  limit: 1,
  userList: [],
  loading: false,
  logged: false,
});
const getters = {
  user: (state) => state.user,
  currentUser: (state) => state.currentUser,
  userList: (state) => state.userList,
  loading: (state) => state.loading,
  logged: (state) => state.logged,
  pageNum: (state) => state.pageNum,
  totalPageNum: (state) => Math.ceil(state.total.length / state.limit),
};
const mutations = {
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_LOGGED(state, status) {
    state.logged = status;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  SET_USER_LIST(state, userList) {
    state.total = userList;
    state.userList = state.total.slice(0, state.limit);
  },
  SET_AVATAR(state, avatar) {
    state.avatarUser = avatar;
  },
  CHANGE_PAGE(state, page) {
    state.pageNum = page;
    let statIndex = state.limit * (state.pageNum - 1);
    let endIndex = statIndex + state.limit;
    state.userList = state.total.slice(statIndex, endIndex);
  },
};
const actions = {
  changePage({ commit }, page) {
    commit("CHANGE_PAGE", page);
  },
  async uploadAvatar({ commit }, payload) {
    let formData = new FormData();
    if (payload) {
      formData.append("file", payload[0]);
      try {
        const response = await axiosClient.post("users/upload", formData);
        if (response) {
          commit("SET_AVATAR", response.filename);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async signUp({ dispatch, commit, state }, data) {
    await dispatch("uploadAvatar", data.avatar);
    let avatar = state.avatarUser;
    let newPosition = [];
    data.position.map((item) => {
      newPosition.push(item.name);
    });
    const registerForm = {
      username: data.username,
      password: data.password,
      fullname: data.fullname,
      birthday: data.birthday,
      address: data.address,
      position: newPosition.join(", "),
      describe_yourself: data.describe_yourself,
      avatar: avatar,
      reason: data.reason,
      salary: data.salary,
      status: 0,
    };
    try {
      commit("SET_LOADING", true);
      const response = await axiosClient.post("/auth/signup", registerForm);
      console.log(response);
      if (response) {
        commit("SET_LOGGED", true);
        commit("SET_USER", response.data);
        setUserId(response.data.id);
        commit("SET_LOADING", false);
        toast.addToast({
          title: "Success Register",
          type: "success",
          position: "top",
          message: response.message,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      commit("SET_LOADING", false);
      toast.addToast({
        title: "Error",
        type: "error",
        position: "top",
        message: "Failed create user!",
        duration: 2000,
      });
    }
  },
  async login({ commit }, data) {
    const loginForm = {
      username: data.username,
      password: data.password,
    };
    try {
      commit("SET_LOADING", true);
      const response = await axiosClient.post("/auth/login", loginForm);
      console.log(response);
      if (response) {
        commit("SET_LOGGED", true);
        commit("SET_USER", response);
        setUserId(response.id);
        commit("SET_LOADING", false);
        toast.addToast({
          title: "Success Login",
          type: "success",
          position: "top",
          message: "Login successfully!",
          duration: 1000,
        });
      }
    } catch (error) {
      commit("SET_LOADING", false);
      toast.addToast({
        title: "Error",
        type: "error",
        position: "top",
        message: error.response.data.message,
        duration: 2000,
      });
    }
  },
  async getUser({ commit }, { id, reload }) {
    try {
      commit("SET_LOADING", true);
      const response = await axiosClient.get(`/users/${id}`);
      if (response && reload) {
        commit("SET_USER", response);
        commit("SET_LOADING", false);
      } else {
        commit("SET_CURRENT_USER", response);
        commit("SET_LOADING", false);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getUserList({ commit }) {
    try {
      commit("SET_LOADING", true);
      const response = await axiosClient.get("/users");
      if (response) {
        commit("SET_USER_LIST", response);
        commit("SET_LOADING", false);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async approval({ commit, dispatch }, { id, status }) {
    try {
      commit("SET_LOADING", true);
      const response = await axiosClient.post("/users/status", { id, status });
      if (response) {
        dispatch("getUserList");
        toast.addToast({
          title: "Success",
          type: "success",
          position: "top",
          message: response.message,
          duration: 2000,
        });
        commit("SET_LOADING", false);
      }
    } catch (error) {
      console.log(error);
    }
  },
  setLogged({ commit }, status) {
    commit("SET_LOGGED", status);
  },
  logout({ commit }) {
    removeUserId();
    commit("SET_LOGGED", false);
    commit("SET_USER", {});
    commit("SET_CURRENT_USER", {});
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
