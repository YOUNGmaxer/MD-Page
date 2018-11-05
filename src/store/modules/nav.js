const state = {
  isOpen: false,
  currentContent: null,
  lastFiles: []
};

const mutations = {
  CHANGE_OPEN_STATE(state) {
    state.isOpen = !state.isOpen;
  },
  GET_CURRENT_CONTENT(state, content) {
    state.currentContent = content;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
