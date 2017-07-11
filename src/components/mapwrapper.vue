<script>
  import incidents from 'src/assets/js/incidents'
  import kivumap from './kivumap.vue'


  export default {
    props: {
    },

    data () {
      return {
      }
    },

    computed: {
    },

    components: {
      kivumap,
    },
    methods: {
      greet(event){
        console.log('hi')
        console.log(event)
      }
    }
  }
</script>

<template>
  <div class="mapwrapper">
    <div class="map-filters">
      <ul>
        <a v-on:click="greet" href="#" id="1">Actor 1</a>
        <a v-on:click="greet" href="#" id="2">Actor 2</a>
        <a v-on:click="greet" href="#" id="3">Actor 3</a>
      </ul>
    </div>
    <kivumap></kivumap>
  </div>
</template>
