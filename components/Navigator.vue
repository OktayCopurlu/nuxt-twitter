<template>
  <nav id="nav">
    <ul>
      <nuxt-link to="/">Home</nuxt-link>
      |
      <nuxt-link to="/twitter">Twitter</nuxt-link>
      |
      <nuxt-link to="/post-tweet">Post Tweet</nuxt-link>
      |
      <nuxt-link v-if="token" to="/user-page">User Page </nuxt-link>
    </ul>
    <ul>
      <nuxt-link v-if="!token" to="/login"> Login</nuxt-link>
      <nuxt-link v-else to="/login">
        <a class="logout" @click="logout">Logout</a>
      </nuxt-link>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
};
</script>
<style lang="sass">
*
  font-family: (Avenir, Helvetica, Arial, sans-serif)
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

body
  padding: 0
  margin: 0
h3
  text-align: center
#nav
  width: 100%
  text-align: center
  background-color: black
  display: flex
  justify-content: space-around
  margin-bottom: 1rem

#nav a
  font-weight: bold
  width: 100%
  position: relative
  color: white
  text-decoration: none

a:hover
  color: #000

a::before
  content: ""
  position: absolute
  display: block
  width: 100%
  height: 2px
  bottom: 0
  left: 0
  background-color: white
  transform: scaleX(0)
  transition: transform 0.3s ease

a:hover::before
  transform: scaleX(1)

.page-enter
  opacity: 0

.page-enter-active
  transition: (all 0.5s ease-out)

.page-leave-to
  opacity: 0

.page-leave-active
  transition: (all 0.5s ease-in)

.logout
  border: 0
  background-color: black
  cursor: pointer
  color: red
  font-weight: bold
  font-size: 14px
</style>
