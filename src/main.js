import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chart from 'chart.js';
import Chartkick from 'vue-chartkick';
import { VueSpinners } from '@saeris/vue-spinners';

import router from "@/router"; // acá se importa el router
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router, // esto es lo mismo que router: router
  render: h => h(App)
}).$mount("#app");
