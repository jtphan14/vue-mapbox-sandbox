<script>
  import incidents from 'src/assets/js/incidents'
  import kivumap from './kivumap.vue'

  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  import { mapActions } from 'vuex'
  import * as types from '../store/types';

  export default {
    props: {
    },

    data () {
      return {
      }
    },
    mounted() {
      // incidents.incidentWithoutPromise()
    },

    computed:  {
        value: {
          get() {
            return this.$store.getters.value;
          },
          set(value) {
            this.$store.dispatch('updateValue', value)
          }
        },
         ...mapGetters({
             doubleCounter: types.DOUBLE_COUNTER,
             stringCounter: types.CLICK_COUNTER,
             incidentLength: types.ALL_INCIDENTS,
             map: types.MAP,
         }),
    },
    components: {
      kivumap,
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value)
      },
      removeMapSource() {
        const map = this.map

        console.log('const map', map);
        map.removeSource('markers')
      }
    }
  }
</script>

<template>
  <div class="mapwrapper">
    <div class="map-filters">
      <ul>
        <a @click="removeMapSource" href="#" id="1">Remove Map Source</a>
        <a @click="" href="#" id="2">Actor 2</a>
        <h4>{{doubleCounter}}</h4>
        <h5>{{stringCounter}}</h5>
        <h4>Incident Length: {{incidentLength}}</h4>
      </ul>
    </div>
    <kivumap></kivumap>
  </div>
</template>
