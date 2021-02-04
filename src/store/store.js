import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import data from "../data.json";

const store = new Vuex.Store({
  state: {
    data,
  },
});

export default store;
