import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueLazyload from 'vue-lazyload';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, fab, far)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;
Vue.component("hello", require('./components/HelloWorld.vue'));
Vue.component("proj", require('./components/Projects.vue'));
Vue.use(VueLazyload);


// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");