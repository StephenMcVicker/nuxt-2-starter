<template lang="pug">
  main
    h1 Hi Stephen!
    h4 Let's find you a social worker
    input(placeholder="Search...")
    h2 Nearby Social Workers
    worker(v-for="worker in workers"
           :key="`worker-${worker.id}`" 
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
    };
  },
  computed: {
    workers () {
       return this.$store.getters[`workers/get`];
    }
  },
  methods: {}
};
</script>
