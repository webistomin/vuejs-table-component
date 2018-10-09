import axios from 'axios';

export default {
  state: {
    dataList: [],
    tableHeadings: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary', 'Currency'],
  },
  mutations: {
    setDataList(state, payload) {
      state.dataList = payload;
    },
  },
  actions: {
    async getDataFromAPI({ commit }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        await axios.get('https://api.myjson.com/bins/vh9ms')
          .then((response) => {
            commit('setLoading', false);
            commit('setDataList', response.data);
          });
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    },
  },
  getters: {
    getDataList(state) {
      return state.dataList;
    },
    getTableHeadings(state) {
      return state.tableHeadings;
    },
  },
};
