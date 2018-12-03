import Vue from 'vue'
import App from './App.vue'
import router from './router'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const moment = require('moment')
require('moment/locale/pt-br')
moment.locale('pt-br');

Vue.use(require('vue-moment'), {
    moment
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})