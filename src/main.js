import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// firebase.js is the file containing the API KEY
//and database url and all the private config
//-- See https://firebase.google.com/docs/web/setup
import "./firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
