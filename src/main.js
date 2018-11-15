import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueTouch from 'vue-touch'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Vant);
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
