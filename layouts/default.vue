ls
<template lang="pug">
  .body
    header
      nav
        .logo
        ham-burger-menu(:menuIsOpen='menuOpen',
                        @toggle-menu='toggleMenu')
    .menu(:data-open='menuOpen')
    nuxt-child
    footer
      .circle(@click="setActiveTab(1)"
              to="/"
              v-wave
              :class="{active: activeTab === 1}")
        font-awesome-icon(:icon="['fas', 'home']")
      .circle(@click="setActiveTab(2)"
              to="/TestPage/"
              v-wave
              :class="{active: activeTab === 2}")
        font-awesome-icon(:icon="['fas', 'calendar-week']")
      .circle(@click="setActiveTab(3)"
              to="/TestPage/"
              v-wave
              :class="{active: activeTab === 3}")
        font-awesome-icon(:icon="['fas', 'envelope']")
      .circle(@click="setActiveTab(4)"
              to="/TestPage/"
              v-wave
              :class="{active: activeTab === 4}")
        font-awesome-icon(:icon="['fas', 'user']")
</template>

<script>
  import HamBurgerMenu from '@/components/ui/HamBurgerMenu.vue';
  export default {
    components: { HamBurgerMenu },
    data () {
      return {
      // menuIsOpen: false
      };
    },
    computed: {
      activeTab () {
        return this.$store.getters['ui/getNavActiveTab'];
      },
      menuOpen () {
        return this.$store.getters['ui/getMenuOpen'];
      }
    },
    methods: {
      setActiveTab (tab) {
        if (this.activeTab === tab) {
          this.scrollToTop();
          return;
        }

        this.$store.commit('ui/setNavActiveTab', tab);
        if (this.activeTab === 1) {
          this.$router.push('/');
        } else {
          this.$router.push('/TestPage/');
        }
      },
      scrollToTop () {
        const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
        const scrollToOptions = {
          top: 0,
          left: 0,
          behavior: 'smooth'
        };
        isSmoothScrollSupported ? window.scroll(scrollToOptions) : window.scroll(scrollToOptions.left, scrollToOptions.top);
      },
      toggleMenu () {
        this.$store.commit('ui/toggleMenu');
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

  h1 {
    font-size: 38px;
    font-weight: 800;
    line-height: 45px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }

  main {
    padding: 0 1rem 8rem 1rem;
  }

  p {
    font-size: 16px;
    line-height: 26px;
  }
</style>

<style lang="scss" scoped>
  header {
    nav {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;
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
    transition: all $animation-time-menu;
    width: 100%;
    z-index: $z-index-menu;

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
    box-shadow: 0 -11px 15px -3px rgba(149, 157, 165, .2);
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
