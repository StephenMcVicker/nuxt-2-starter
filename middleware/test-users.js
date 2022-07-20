import FakeUsers from '../data/fakeUsers.json';

export default ({ store }) => {
  store.commit('users/set', FakeUsers.testWorkers);
};
