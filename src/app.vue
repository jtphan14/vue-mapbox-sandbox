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
      incidentList(){

        incidents.getIncidents();

        const promise    = incidentList.then(function(response){
          const { data } = response
          this.incidents = data

          console.log('this.incidents', this.incidents)
          return data
        })
      },
      // anotherMethod() {
      //   this.incidentList('blah').then((data) => {
      //
      //     console.log('data', data)
      //       this.incidents = data;
      //   });
      // }
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
