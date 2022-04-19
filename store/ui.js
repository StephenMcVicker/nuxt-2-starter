export const state = () => ({
  menuOpen: false,
  navActiveTab: 1
});

export const mutations = {
  setNavActiveTab (state, tab) {
    state.navActiveTab = tab;
  },
  toggleMenu (state) {
    state.menuOpen = !state.menuOpen;
  }
};

export const getters = {
  getMenuOpen (state) {
    return state.menuOpen;
  },
  getNavActiveTab (state) {
    return state.navActiveTab;
  }
};