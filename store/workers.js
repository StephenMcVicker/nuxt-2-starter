export const state = () => ({
  workers: []
});

export const mutations = {
  set (state, workers) {
    state.workers = workers;
  },
  sort (state, soryKey) {
    state.workers.sort((a, b) => (a[soryKey] > b[soryKey] ? -1 : 1));
  }
};

export const getters = {
  get (state) {
    return state.workers;
  }
};
