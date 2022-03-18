<template lang="pug">
  .card
    slot
</template>

<style lang="scss" scoped>
.card {
  background: $white;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, .2) 0 8px 24px;
  padding: .5rem 1rem;
}
</style>