import welcome from './components/welcome.vue'
import about from './components/about.vue'
import mapwrapper from './components/mapwrapper.vue'

export default {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', component: welcome},
    {path: '/about', component: about},
    {path: '/mapwrapper', component: mapwrapper}
  ]
}
