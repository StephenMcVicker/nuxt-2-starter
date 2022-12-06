<template lang="pug">
  .card
    slot
</template>

<style lang="scss" scoped>
  .card {
    background: $white;
    border-radius: 6px;
    box-shadow: $card-box-shadow;
    padding: 1rem;
  }
</style>
