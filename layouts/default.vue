<template lang="pug">
  .body
    header
      nav
        .logo
        ham-burger-menu(:menuIsOpen='menuIsOpen',
                        @toggle-menu='menuIsOpen = !menuIsOpen')
    .menu(:data-open='menuIsOpen')
    nuxt-child
    footer
      nuxt-link.circle.active(@click="scrollToTop"
                              to="/"
                              v-wave)
        font-awesome-icon(:icon="['fas', 'home']")
      nuxt-link.circle(to="/TestPage/" 
                       v-wave)
        font-awesome-icon(:icon="['fas', 'calendar-week']")
      nuxt-link.circle(to="/TestPage/"
                       v-wave)
        font-awesome-icon(:icon="['fas', 'envelope']")
      nuxt-link.circle(to="/TestPage/"
                       v-wave)
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
  },
  methods: {
    scrollToTop() {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      const scrollToOptions = {
        top: 0,
        left: 0,
        behavior: 'smooth'
      };
      isSmoothScrollSupported
        ? window.scroll(scrollToOptions)
        : window.scroll(scrollToOptions.left, scrollToOptions.top);
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
@import '~@/assets/scss/resets.scss';

body,
html {
  background-color: $background-blue;
  color: $primary-font-color;
  font-family: 'Montserrat', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  min-width: fit-content;
  overflow: visible;
  overflow-x: hidden;
  padding: 0;
  position: relative;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  text-rendering: geometricPrecision;
}

.body {
  background-color: $background-blue;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
  position: relative;
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
  nav {
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

.menu {
  background-color: red;
  height: 100vh;
  left: -101%;
  position: fixed;
  top: 0;
  transition: all $animTimeMenu;
  width: 100%;
  z-index: $zIndexMenu;

  &[data-open='true'] {
    left: 0;
  }
}

footer {
  align-items: center;
  background-color: $white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  box-shadow: 0 -11px 15px -3px rgba(149, 157, 165, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem 0;
  position: fixed;
  width: 100%;

  .circle {
    align-items: center;
    background-color: none;
    border-radius: 50vh;
    color: $grey;
    display: flex;
    font-size: 1.5rem;
    height: 50px;
    justify-content: center;
    outline: none;
    width: 50px;

    &.active {
      background-color: $secondary-purple-lighter;
      color: $primary-purple;
    }
  }
}
</style>
