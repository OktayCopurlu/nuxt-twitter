import { LOGIN, REGISTER } from "./request";
import { removeItem } from "../sessionStorage.js";
export const state = () => ({
  userLikedTweets: [],
  username: "",
  userId: "",
  token: "",
});
export const mutations = {
  setUserInfo(state, { username, token, _id }) {
    state.token = token;
    state.userId = _id;
    state.username = username;
  },

  setUserLikedTweets(state, userLikedTweets) {
    state.userLikedTweets = userLikedTweets;
    return state.userLikedTweets;
  },
  clearTokenAndLogout(state) {
    state.token = null;
    removeItem("token");
    removeItem("username");
    removeItem("id");

    this.$apolloHelpers.onLogout();
  },
};
export const actions = {
  async login({ commit }, payload) {
    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: LOGIN,
        variables: payload,
      });
      sessionStorage.setItem("token", response.data.login.token);
      sessionStorage.setItem("username", response.data.login.username);
      sessionStorage.setItem("id", response.data.login._id);

      await this.$apolloHelpers.onLogin(response.data.login.token);

      await commit("setUserInfo", response.data.login);

      await this.$router.push("/twitter");
    } catch (error) {
      console.error(error);
    }
  },

  initAuth(context, req) {
    let info = {
      token: "",
      username: "",
      _id: "",
    };

    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      info.token = this.$apolloHelpers.getToken("apollo-token");
    } else {
      info.token = sessionStorage.getItem("token");
      info.username = sessionStorage.getItem("username");
      info._id = sessionStorage.getItem("id");
    }
    context.commit("setUserInfo", info);
  },
  async register({ commit }, payload) {
    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: REGISTER,
        variables: payload,
      });
      await commit("setUserInfo", response.data.createUser);
    } catch (error) {
      console.error(error);
    }
  },
  logout({ commit }) {
    commit("clearTokenAndLogout");
  },
};
export const getters = {
  getTokenFromState(state) {
    state.token;
  },
};
