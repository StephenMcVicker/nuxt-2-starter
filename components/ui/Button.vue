<template lang="pug">
  component(:is="type"
            :href="href"
            class="button"
            @click="$emit('btn-click')"
            v-wave)
    slot
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        default: null
      }
    },
    computed: {
      type () {
        if (this.href) {
          return 'a';
        } else {
          return 'button';
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
.button {
  background: $primary-purple;
  border: none;
  border-radius: 50vh;
  color: $white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0.5em 0;
  outline: 0;
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;
  user-select: none;

  &:active {
    background: #5742ad;
    transform: scale(0.95);
  }
}
</style>
