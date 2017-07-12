import Vue from 'vue'
import VueRouter from 'vue-router'
import app from 'src/app.vue'
import routerList from './router'
import incidents from 'src/assets/js/incidents'
import { store } from './store/store'
window.mapboxgl = require('mapbox-gl')

import 'scss/style.scss'

// Router setup
Vue.use(VueRouter)
const router = new VueRouter(routerList)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(app)
}).$mount('#app')


// const incidentList = incidents.getIncidents()
// const promise      = incidentList.then(function(response){
//   const { data } = response
//   return data
// })
//
// const getIncidentType = (incidents) => {
//   return incidents.map(i => i.type)
// }
//
//
// promise.then(getIncidentType).then(type => console.log(type))


// const getIncidents = () => {
//   return new Promise(resolve, reject) {
//     // condition to resolve
//     resolve(data)
//
//     if ( thing = bad ) {
//       reject()
//     }
//   }
// }
