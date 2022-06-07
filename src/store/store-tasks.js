import Vue from "vue";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/09/12",
      dueTime: "18:30",
    },
    ID2: {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/09/13",
      dueTime: "14:00",
    },
    ID3: {
      name: "Get apples",
      completed: false,
      dueDate: "2019/09/14",
      dueTime: "16:00",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    console.log("delete id: ", id);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    Vue.delete(state.tasks, id);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
