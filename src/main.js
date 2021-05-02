import Vue from 'vue'
import App from './App.vue'
import store from "./store";

Vue.config.productionTip = false
import setup from "./helpers/interceptors";
setup()
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
