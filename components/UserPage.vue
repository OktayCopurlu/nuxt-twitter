<template>
  <div>
    <nav id="nav">
      <ul>
        <nuxt-link to="/user-page/user-tweets">My Tweets</nuxt-link> |
        <nuxt-link to="/user-page/user-liked-tweets">Liked Tweets</nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    tweets() {
      const tweets = this.$store.tweet.state.tweets;
      return tweets;
    },
    userLikeTweets() {
      const tweets = this.$store.tweet.state.userLikedTweets;
      return tweets;
    },
  },
};
</script>
