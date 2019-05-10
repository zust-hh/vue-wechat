export default {
  namespaced: true,
  state: {
    status: '',
  },
  getters: {
    getStatus(state) {
      return state.status;
    }
  },
  // 同步数据改变操作放 mutations
  mutations: {
    changeStatus(state, status) {
      state.status = status;
    }
  },
  // 涉及异步操作的放这里
  actions: {
    changeStatusWithApi(context, status) {
      setTimeout(() => context.commit('changeStatus', status), 1000);
    }
  }
};
