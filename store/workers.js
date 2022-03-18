export const state = () => ({
  workers: []
});

export const mutations = {
  set (state, workers) {
    state.workers = workers;
  }
};

export const getters = {
  get (state) {
    return state.workers;
  }
};