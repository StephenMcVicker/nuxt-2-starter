<template lang="pug">
  main
    header
      h1 {{ $t('greeting', {name: 'Stephen'}) }}
    section
</template>

<script>
  import UserCard from '@/components/UserCard.vue';
  import VButton from '@/components/ui/Button.vue';

  export default {
    components: { Worker, UserCard, VButton },
    layout: 'default',
    middleware: ['test-users'],
    data () {
      return {
        sortOptions: ['likes', 'location'],
        sortBy: '',
        search: ''
      };
    },
    computed: {
      users () {
        return this.$store.getters[`users/get`];
      }
    },
    created () {
      this.sortBy = this.sortOptions[this.sortValue];
      if (this.$store.getters['ui/getNavActiveTab'] !== 1) {
        this.$store.commit('ui/setNavActiveTab', 1);
      }
    },
    methods: {
      sortingChange () {
        this.sortValue >= this.sortOptions.length - 1
          ? (this.sortValue = 0)
          : this.sortValue++;
        this.sortBy = this.sortOptions[this.sortValue];
        this.$store.commit('users/sort', this.sortBy);
      }
    }
  };
</script>

<style lang="scss" scoped>
  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 3rem;
  }
  h2.small {
    font-size: 1rem;
  }

  h3 {
    span {
      color: $primary-purple;
      margin-left: .4rem;
    }
  }

  section.workers-search {
    display: flex;
    flex-direction: column;

    input {
      background-color: $white;
      border: 1px solid $primary-purple;
      border-radius: 50vh;
      color: $primary-font-color;
      margin: .8rem 0;
      padding: 1rem;

      &:focus {
        box-shadow: $card-box-shadow;
      }
    }

    p {
      span {
        color: $primary-purple;
        margin-left: .4rem;
      }
    }

    section.results {
      margin-top: .5rem;
    }
  }
</style>
