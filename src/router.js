import welcome from './components/welcome.vue'
import about from './components/about.vue'
import mapwrapper from './components/mapwrapper.vue'
import graph from './components/graph.vue'
import filterOptions from './components/filterOptions.vue'

export default {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', component: welcome},
    {path: '/about', component: about},
    {path: '/graph', component: graph},
    {path: '/mapwrapper', component: mapwrapper},
    {path: '/filterOptions', component: filterOptions}
  ]
}
