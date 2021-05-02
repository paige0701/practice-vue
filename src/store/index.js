import Vue from 'vue'
import Vuex from 'vuex'
// import state from "./state";
// import getters from "./getters";
// import mutations from "./mutations";
// import actions from "./actions";
import todos from "@/store/modules/todos";


// entry to vuex

// Load vuex
Vue.use(Vuex)
// const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// })
const store = new Vuex.Store({
    modules: {todos}
})
export default store;

