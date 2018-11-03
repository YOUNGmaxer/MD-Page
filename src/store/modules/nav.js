const state = {
  isOpen: false
};

const mutations = {
  CHANGE_OPEN_STATE(state) {
    state.isOpen = !state.isOpen;
  },
  KEEP_OPEN_STATE(state) {
    state.isOpen = true;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
