import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;
Vue.component("hello", require('./components/HelloWorld.vue'));
Vue.component("proj", require('./components/Projects.vue'));
Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");