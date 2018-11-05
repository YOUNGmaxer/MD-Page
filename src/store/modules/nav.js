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
  },
  ADD_LASTFILE(state, fileInfo) {
    state.lastFiles.unshift(fileInfo);
    if (state.lastFiles.length > 5) {
      state.lastFiles = state.lastFiles.slice(0, 5);
    }
  }
};

const actions = {
  openNewFile({ commit }, fileInfo) {
    commit('GET_CURRENT_CONTENT', fileInfo.content);
    commit('ADD_LASTFILE', fileInfo);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
