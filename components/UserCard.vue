<template lang="pug">
  card
    section.profile
      .pic
        p {{ initials }}
      .details
        h3 {{ fullName }}
        font-awesome-icon(:icon="['fas', 'check']")
    v-button(@btn-click="changeRoute") View
</template>

<script>
  import Card from '@/components/ui/Card.vue';
  import VButton from '@/components/ui/Button.vue';

  export default {
    components: { Card, VButton },
    props: {
      user: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    computed: {
      fullName () {
        return `${this.user.firstName} ${this.user.lastName}`;
      },
      initials () {
        return `${this.user.firstName.slice(0, 1)}${this.user.lastName.slice(
          0,
          1
        )}`;
      }
    },
    methods: {
      changeRoute () {
        this.$router.push('TestPage');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .card {
    margin: 1rem 0;

    a,
    button {
      width: 100%;
    }
  }

  .profile {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    .pic {
      align-items: center;
      background-color: $primary-yellow;
      border: 4px solid $primary-purple;
      border-left-color: $primary-purple-light;
      border-radius: 50vh;
      border-top-color: $primary-purple-light;
      color: $white;
      display: flex;
      font-weight: 900;
      height: 50px;
      justify-content: center;
      margin: 0 1rem 0 0;
      padding: 2px;
      width: 50px;
    }

    h3 {
      display: inline-flex;
      margin: .1rem 0;
    }

    p {
      margin: .1rem 0;
    }

    .vetted {
      align-items: center;
      background-color: $primary-blue;
      border-radius: 50vh;
      color: $white;
      display: flex;
      font-size: .5rem;
      height: 1rem;
      justify-content: center;
      margin-left: .3rem;
      overflow: hidden;
      width: 1rem;
    }
  }

  .stat {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: .8rem 0;

    p {
      margin: 0 .5rem;
    }
  }
</style>
