<template lang="pug">
  main
    h1 Test Page
    button(@click="changeRoute") Back to Main
</template>

<script>
export default {
  methods: {
    changeRoute() {
      this.$router.push('/');
    }
  }
};
</script>
