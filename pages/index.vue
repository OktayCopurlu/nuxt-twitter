<template>
  <Home />
</template>

<script>
export default {
  middleware: ["isLoggin", "auth"],
};
</script>
