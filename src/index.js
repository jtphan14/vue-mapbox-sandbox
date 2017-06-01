import Vue from 'vue'
import VueRouter from 'vue-router'
import app from 'src/app.vue'
import routerList from './router'
window.mapboxgl = require('mapbox-gl')

import 'scss/style.scss'

// Router setup
Vue.use(VueRouter)
const router = new VueRouter(routerList)

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app')
