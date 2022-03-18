<template lang="pug">
  main
    h1 {{ $t('test.header') }}
    v-button(@btn-click="changeRoute") {{ $t('test.buttonCTA') }}
</template>

<script>
import VButton from '@/components/ui/Button.vue';

export default {
  components: { VButton },
  methods: {
    changeRoute() {
      this.$router.push('/');
    }
  }
};
</script>

<i18n>
  {
    "en": {
      "test": {
        "header": "Test Page",
        "buttonCTA": "Back To Main"
      }
    }
  }
</i18n>