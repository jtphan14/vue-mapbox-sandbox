<script>
  import navComponent from './components/nav.vue'
  import logo from 'images/logo.png'

  export default {
    props: {
      message: {
        type: String,
        default: 'You\'ve made it!'
      }
    },

    data () {
      return {
        logo,
      }
    },

    computed: {

    },

    components: {
      navComponent,
    }
  }
</script>

<template>
  <div id="app">
    <div class="header">
    </div>
    <div class="main">
      <navComponent />
      <div class="content">
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
