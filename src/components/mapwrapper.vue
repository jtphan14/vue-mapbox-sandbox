<script>
  import incidents from 'src/assets/js/incidents'
  import kivumap from './kivumap.vue'
  import filterOptions from './filterOptions.vue'

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
             filteredIncidents: types.FILTERED_INCIDENTS,
             normalizedIncidents: types.NORMALIZED_INCIDENTS,
             map: types.MAP,
         }),
    },
    components: {
      kivumap,
      filterOptions
    },
    methods: {
      ...mapActions({
        asyncUpdateFilteredIncidents: types.ASYNCUPDATE_FILTERED_INCIDENTS,
      }),
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value)
      },
      filterBy(incidentType){
        const incidentLocations = this.normalizedIncidents;

        let filteredLocations;

        if (incidentType == 'All'){

          filteredLocations = incidentLocations

        } else {

           filteredLocations = _.filter(incidentLocations, function(incident){

            const { properties : { primary_incident_type} } = incident

            return primary_incident_type == incidentType ? true : false

          });

        }

        this.asyncUpdateFilteredIncidents(filteredLocations)

        this.removeMapSource()
        this.addMapSource()

        console.log('filteredLocations', filteredLocations);
      },
      removeMapSource() {
        const map = this.map

        console.log('const map', map);
        map.removeSource("markers")
        map.removeLayer("markers")
      },
      addMapSource() {
        const map = this.map

        const incidentLocations = this.filteredIncidents;

        map.addSource("markers", {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": incidentLocations
          }
        });

        map.addLayer({
            "id": "markers",
            "source": "markers",
            "type": "circle",
            "paint": {
              'circle-color': {
                  "property": 'primary_incident_type',

                  type: 'categorical',

                  "stops": [
                    ["Violent Deaths", '#fa946e'],
                    ["Rape", '#c091e6'],
                  ]
                },
            }
          });
      }
    }
  }
</script>

<template>
  <div class="mapwrapper">
    <filterOptions></filterOptions>

    <div class="main-content">
      <transition name="fade" mode="out-in" appear>
        <kivumap></kivumap>
      </transition>
    </div>
  </div>
</template>
