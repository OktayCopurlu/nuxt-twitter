<template>
  <UserLikedTweet />
</template>

<script>
export default {
  middleware: ["isLoggin", "auth"],

};
</script>

<style lang="scss" scoped>
</style>