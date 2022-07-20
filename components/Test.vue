<template lang="pug">
  h1 {{ message }}
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    color: red;
  }
</style>
