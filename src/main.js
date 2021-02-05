import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Donut from "vue-css-donut-chart";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-css-donut-chart/dist/vcdonut.css";

import "./assets/scss/app.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Donut);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
