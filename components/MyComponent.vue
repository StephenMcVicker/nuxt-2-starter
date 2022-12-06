<template lang="pug">
  h3 {{ message }}
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
  h3 {
    background: $background-blue;
    color: $primary-red;
  }
</style>
