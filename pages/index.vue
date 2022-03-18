<template lang="pug">
  main
    h1 Hi Stephen!
    h4 Let's find you a social worker
    input(placeholder="Search...")
    h2 Nearby Social Workers
    worker(v-for="worker in workers" :key="worker.id" :worker="worker")
</template>

<script>
import Card from '@/components/ui/Card.vue';
import Test from '@/components/Test.vue';
import Worker from '@/components/Worker.vue';
import VButton from '@/components/ui/Button.vue';
export default {
  components: { Card, Test, Worker, VButton },
  layout: 'default',
  data() {
    return {
      workers: [
        {
          id: 1,
          firstName: 'Claire',
          lastName: 'Lawlor',
          exp: '7 years',
          likes: '97%',
          patients: 80,
          location: 'Kilkenny',
          availability: 'Today',
          vetted: true
        },
        {
          id: 2,
          firstName: 'Jackie',
          lastName: '',
          exp: '2 years',
          likes: '50%',
          patients: 200,
          location: 'Clancy Quay',
          availability: 'Today',
          vetted: false
        }
      ]
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    decreaseCounter() {
      this.$store.commit('decrement');
    },
    increaseCounter() {
      this.$store.commit('increment');
    },
    testCallback() {
      console.log('Hello from button');
    }
  }
};
</script>
