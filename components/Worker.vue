<template lang="pug">
  card
    section.profile
      .pic
        p {{ initials }}
      .details
        h3 {{ fullName }}
          .vetted(v-if="worker.vetted")
            font-awesome-icon(:icon="['fas', 'check']")
        p {{ worker.exp }} exp.
    .stat
      font-awesome-icon(:icon="['fas', 'heart']")
      p {{ worker.likes }}
      p {{ worker.patients }} patients
    .stat
      font-awesome-icon(:icon="['fas', 'map-marker']")
      p {{ worker.location }}
    .stat
      font-awesome-icon(:icon="['fas', 'clock']")
      p Availability:
      strong {{ worker.availability }}
    v-button(@btn-click="changeRoute") Hire
</template>

<script>
  import Card from '@/components/ui/Card.vue';
  import VButton from '@/components/ui/Button.vue';

  export default {
    components: { Card, VButton },
    props: {
      worker: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    computed: {
      fullName () {
        return `${this.worker.firstName} ${this.worker.lastName}`;
      },
      initials () {
        return `${this.worker.firstName.slice(0, 1)}${this.worker.lastName.slice(
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
    border-radius: 50vh;
    color: $white;
    display: flex;
    font-weight: 900;
    height: 50px;
    justify-content: center;
    margin: 0 1rem;
    width: 50px;
  }

  h3 {
    display: inline-flex;
    margin: 0.1rem 0;
  }

  p {
    margin: 0.1rem 0;
  }

  .vetted {
    align-items: center;
    background-color: $primary-blue;
    border-radius: 50vh;
    color: $white;
    display: flex;
    font-size: 0.5rem;
    height: 1rem;
    justify-content: center;
    margin-left: 0.3rem;
    overflow: hidden;
    width: 1rem;
  }
}

.stat {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0.8rem 0;

  p {
    margin: 0 0.5rem;
  }
}
</style>
