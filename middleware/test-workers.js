import TestWorkers from '../data/testWorkers.json';

export default ({ store }) => {
  store.commit('workers/set', TestWorkers.testWorkers);
};
