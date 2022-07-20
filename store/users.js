export const state = () => ({
  users: []
});

export const mutations = {
  set (state, users) {
    state.users = users;
  },
  sort (state, soryKey) {
    state.users.sort((a, b) => (a[soryKey] > b[soryKey] ? -1 : 1));
  }
};

export const getters = {
  get (state) {
    return state.users;
  }
};
