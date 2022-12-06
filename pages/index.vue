<template lang="pug">
  main
    header
      h1 {{ $t('greeting', {name: 'Stephen'}) }}
    section
      my-component(message="My test component")
    section
      v-card
        h3 Card component
        p This component uses the concept of "slots", the way renders child elements into a parent component
    section
      v-card
        h3 Global Colors
          .colors
            .color(v-for="color in colors"
                  :class="color")
    section
      p This page users middleware, code that runs before render of the page.
      p in this example, it pulls in some fake users from a json file
      ul.my-list(v-for="user in users")
        li {{ user.firstName }}
      p {{ $t('localText1') }}
      p {{ $t('localText2') }}
</template>

<script>
  import MyComponent from '@/components/MyComponent.vue';
  import VCard from '@/components/ui/Card.vue';

  export default {
    components: { MyComponent, VCard },
    layout: 'default',
    middleware: ['test-users'],
    data () {
      return {
        colors: ['blue', 'green', 'red', 'yellow']
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

  section {
    margin: 1rem 0;
    padding: 1rem 0;
  }

  .colors {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;

    .color {
      height: 100px;
      min-width: 100px;

      &.blue {
        background: $primary-blue;
      }

      &.green {
        background: $primary-green;
      }

      &.red {
        background: $primary-red;
      }

      &.yellow {
        background: $primary-yellow;
      }
    }

  }
</style>

<i18n>
  {
    "en": {
      "localText1": "This is text from i18n",
      "localText2": "Just be careful how you format the JSON for it. Never leave a trailing comma"
    }
  }
</i18n>
