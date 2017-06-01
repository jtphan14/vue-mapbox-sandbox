import welcome from './components/welcome.vue'
import about from './components/about.vue'
import kivumap from './components/kivumap.vue'

export default {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    {path: '/', component: welcome},
    {path: '/about', component: about},
    {path: '/kivumap', component: kivumap}
  ]
}
