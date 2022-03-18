<template lang="pug">
  main
    header
      h1 {{ $t('greeting', {name: 'Stephen'}) }}
      h2.small {{ $t('subHeaders.findWorker') }}
    section.workers-search
      h3 {{ $t('Nearby Social Workers') }}
      input(v-model="search"
            placeholder="Search by name"
            type="text")
      worker(v-for="(worker, workerIndex) in filteredWorkers"
            :key="`worker-${workerIndex}`" 
            :worker="worker")
</template>

<script>
import Card from '@/components/ui/Card.vue';
import Test from '@/components/Test.vue';
import Worker from '@/components/Worker.vue';
import VButton from '@/components/ui/Button.vue';

export default {
  components: { Card, Test, Worker, VButton },
  layout: 'default',
  middleware: ['test-workers'],
  data() {
    return {
      search: ''
    };
  },
  computed: {
    filteredWorkers () {
      return this.search.length > 2 ? this.workers.filter(worker => worker.firstName.includes(this.search)) : this.workers;
    },
    workers () {
       return this.$store.getters[`workers/get`];
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 40px;
}
h2.small {
  font-size: 1rem;
}

section.workers-search {
  display: flex;
  flex-direction: column;
  
  input {
    padding: .5rem
  }
}
</style>