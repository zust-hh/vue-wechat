export default {
  namespaced: true,
  state: {
    userName: 'noChange',
  },
  getters: {
    getUserName(state) {
      return state.userName;
    }
  },
  // 同步数据改变操作放 mutations
  mutations: {
    changeUserName(state, userName) {
      state.userName = userName;
    }
  },
  // 涉及异步操作的放这里
  actions: {
    changeUserNameWithApi(context, userName) {
      context.commit('changeUserName', userName)
    }
  }
};
