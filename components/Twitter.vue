<template>
  <div>
    <h3>Tweets</h3>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.id">
        <div>
          <strong>{{ tweet.title }}</strong>
          <span>{{ tweet.username }}</span>
        </div>
        <div class="text">
          {{ tweet.text
          }}<i
            :id="tweet._id"
            @click="liked(tweet)"
            :class="[tweet.likes > 0 ? 'like' : '', 'fas fa-heart']"
          ></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getItem } from "../sessionStorage.js";
export default {
  beforeMount() {
    this.$store.dispatch("tweet/getTweets");
  },

  methods: {
    liked(e) {
      const _id = e._id;
      const username = getItem("username");
      let option;
      if (e.likes > 0) {
        option = "tweet/unLike";
      } else {
        option = "tweet/addLike";
      }
      this.$store.dispatch(option, { _id, username });
    },
  },
  computed: {
    tweets() {
      this.$store.dispatch("tweet/getTweets");
      const tweets = this.$store.state.tweet.tweets;
      return tweets;
    },
  },
};
</script>

<style lang="sass" scoped>
$tablet: 768px

h3
  text-align: center

ul
  width: 30rem
  margin: auto
  @media (max-width: $tablet)
    width: 100%
    margin: 0
    padding: 0
li
  list-style: none
  margin-bottom: 1rem
  div
    display: flex
    justify-content: space-between
    padding: 1rem 2rem
    background-color: LightGray
.text
  text-align: start
  padding: 2rem
  background-color: CadetBlue
  margin: 0
  color: white
i
  cursor: pointer
  color: white
.like
  color: red
</style>