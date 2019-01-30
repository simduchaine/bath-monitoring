import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Firebase from "firebase";
import VueFire from "vuefire";
// firebase.js is the file containing the API KEY
//and database url and all the private config
//-- See https://firebase.google.com/docs/web/setup
import config from "./firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie, faCalendarTimes, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCircleSlider from 'vue-circle-slider';

library.add(faChartPie, faCalendarTimes, faCogs);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCircleSlider, VueFire);

Vue.config.productionTip = false;

let app = Firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
