<template lang="pug">
  .card
    slot
</template>

<style lang="scss" scoped>
  .card {
    background: $white;
    border-radius: 6px;
    box-shadow: rgba(100, 100, 111, .2) 0 7px 29px 0;
    padding: .5rem 1rem;
  }
</style>
