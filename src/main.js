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
  faThermometerHalf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCircleSlider from "vue-circle-slider";
import VueFlashMessage from "vue-flash-message";

library.add(
  faChartPie,
  faCalendarTimes,
  faCogs,
  faSnowflake,
  faThermometerHalf
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCircleSlider);
Vue.use(VueFlashMessage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
