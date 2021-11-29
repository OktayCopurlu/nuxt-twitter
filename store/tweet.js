import {
  CREATE_TWEET,
  GET_ALL_TWEETS,
  GET_USER_TWEETS,
  ADD_LIKE_TWEET,
  UN_LIKE_TWEET,
  GET_USER_LIKED_TWEETS,
} from "./request.js";
export const state = () => ({
  tweets: [],
  userLikedTweets: [],
});
export const mutations = {
  setTweets(state, tweets) {
    state.tweets = [...tweets];
  },

  setUserLikedTweets(state, userLikedTweets) {
    state.userLikedTweets = [...userLikedTweets];
    return state.userLikedTweets;
  },
};
export const actions = {
  async postTweet(_, payload) {
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: CREATE_TWEET,
        variables: payload,
      });
      //add redirect to Twitter
    } catch (error) {
      console.error(error);
    }
  },
  async getTweets({ commit }) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: GET_ALL_TWEETS,
        fetchPolicy: "network-only",
      });
      const data = await response.data.getTweets.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      await commit("setTweets", data);
    } catch (error) {
      console.error(error);
    }
  },
  async getUserTweets({ commit }, payload) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: GET_USER_TWEETS,
        variables: payload,
        fetchPolicy: "network-only",
      });
      const tweets = response.data.getUserTweets.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      await commit("setTweets", tweets);
    } catch (error) {
      console.error(error);
    }
  },
  async addLike(_, payload) {
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: ADD_LIKE_TWEET,
        variables: payload,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async unLike(_, payload) {
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: UN_LIKE_TWEET,
        variables: payload,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async userLikedTweets({ commit }, payload) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: GET_USER_LIKED_TWEETS,
        variables: payload,
        fetchPolicy: "network-only",
      });
      const data = response.data.getUserLikedTweets.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      await commit("setUserLikedTweets", data);
    } catch (error) {
      console.log("error", error);
    }
  },
};
export const getters = {
  tweets(state) {
    return state.tweets;
  },
  userLikeTweets(state) {
    return state.userLikedTweets;
  },
};
