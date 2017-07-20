<script>
  import navComponent from './components/nav.vue'
  import logo from 'images/logo.png'
  import incidents from 'src/assets/js/incidents'

  export default {
    props: {
      message: {
        type: String,
        default: 'You\'ve made it!'
      },
      data: {
        type: Array
      }
    },

    data () {
      return {
        logo,
        incidents: ''
      }
    },

    computed: {

    },

    components: {
      navComponent,
    },
    methods: {
    }
  }
</script>

<template>
  <div id="app">
    <div class="header">
      <navComponent />
    </div>
    <div class="main">
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
