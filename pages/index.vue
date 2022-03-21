<template lang="pug">
  main
    header
      h1 {{ $t('greeting', {name: 'Stephen'}) }}
      h2.small {{ $t('subHeaders.findWorker') }}
    section.workers-search
      h3 {{ $t('Nearby Social Workers') }}
        span {{ `(${filteredWorkers.length})` }}
      input(v-model="search"
            placeholder="Search by name"
            type="text")
      p {{ $t('sortWorkers') }}
        span {{ this.sortBy }}
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
      sortOptions: ['likes', 'patients', 'location'],
      sortBy: '',
      search: ''
    };
  },
  computed: {
    filteredWorkers () {
      const filteredArray = this.search.length > 2 ? this.workers.filter(worker => worker.firstName.includes(this.search)) : this.workers;
      if (this.sortBy.length >= 1) {
        filteredArray.sort((a,b) => (a[this.sortBy] > b[this.sortBy]) ? -1 : 1);
      }
      return filteredArray;
    },
    workers () {
       return this.$store.getters[`workers/get`];
    }
  },
  created () {
    this.sortBy = this.sortOptions[0];
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
    padding: .5rem
  }
}
</style>