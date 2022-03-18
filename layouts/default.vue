<template lang="pug">
  .body
    header
      .menu
        .logo
        ham-burger-menu(:menuIsOpen='menuIsOpen',
                        @toggle-menu='menuIsOpen = !menuIsOpen')
    nuxt-child
    footer
      .menu
        .circle.active(v-wave)
          font-awesome-icon(:icon="['fas', 'home']")
        .circle(v-wave)
          font-awesome-icon(:icon="['fas', 'calendar-week']")
        .circle(v-wave)
          font-awesome-icon(:icon="['fas', 'envelope']")
        .circle(v-wave)
          font-awesome-icon(:icon="['fas', 'user']")
</template>

<script>
import HamBurgerMenu from '@/components/ui/HamBurgerMenu.vue';
export default {
  components: { HamBurgerMenu },
  data() {
    return {
      menuIsOpen: false
    };
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

body {
  background-color: $background-grey;
  color: $primary-font-color;
  font-family: 'Montserrat', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin: 0 auto;
  overflow: visible;
  overflow-x: hidden;
  padding: 0;
  position: relative;
  text-align: left;
  text-rendering: geometricPrecision;
}

.body {
  background: $background-grey;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
}

main {
  padding: 0 1rem 8rem 1rem;
}

section {
  border-bottom: 1px solid $grey;
}
</style>

<style lang="scss" scoped>
header {
  .menu {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 1rem;

    .logo {
      background-color: $primary-purple;
      border-radius: 50vh;
      height: 50px;
      width: 50px;
    }
  }
}

footer {
  bottom: 0;
  position: fixed;
  width: 100%;

  .menu {
    align-items: center;
    background-color: $white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem;

    .circle {
      align-items: center;
      background-color: none;
      border-radius: 50vh;
      color: $grey;
      display: flex;
      font-size: 1.5rem;
      height: 50px;
      justify-content: center;
      width: 50px;

      &.active {
        background-color: $secondary-purple-lighter;
        color: $primary-purple;
      }
    }
  }
}
</style>
