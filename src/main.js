import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.component("hello",require('./components/HelloWorld.vue').default)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

