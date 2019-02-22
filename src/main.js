import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartPie,
  faCalendarTimes,
  faCogs,
  faSnowflake,
  faThermometerHalf,
  faPowerOff,
  faChevronDown,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCircleSlider from "vue-circle-slider";
import VueFlashMessage from "vue-flash-message";
import Firebase from "firebase";
// firebase.js is the file containing the API KEY
//and database url and all the private config
//-- See https://firebase.google.com/docs/web/setup
import config from "./firebase";

const fb = Firebase.initializeApp(config);
const database = fb.database();
export const dbData = database.ref();

library.add(
  faChartPie,
  faCalendarTimes,
  faCogs,
  faSnowflake,
  faThermometerHalf,
  faPowerOff,
  faChevronDown,
  faBell
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCircleSlider);
Vue.use(VueFlashMessage);

Vue.config.productionTip = false;

//handle page reload
let app;
Firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
