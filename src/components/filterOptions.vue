<script>

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
        filteredIncidents: types.FILTERED_INCIDENTS,
        normalizedIncidents: types.NORMALIZED_INCIDENTS,
        map: types.MAP,
    }),
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
        },
        fillData () {
          console.log('fillData');

          this.datacollection = {
            labels: ["1900", "1950", "1999", "2050"],
            datasets: [{
                label: "Europe",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408,547,675,734],
              }, {
                label: "Africa",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133,221,783,2478]
              }
            ]
          }
        },
        getRandomInt () {
          return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
      }

}
</script>

<template>
  <div class="map-filters nav-menu">
    <div >
      <ul>
        <a @click="removeMapSource" href="#" id="1">Remove Map Source</a>
        <a @click="addMapSource" href="#" id="2">Add Map Source</a>
        <a @click="filterBy('Rape')" href="#" id="2">Rapes :( </a>
        <a @click="filterBy('Violent Deaths')" href="#" id="2">Violent Deaths :( </a>
        <a @click="filterBy('All')" href="#" id="2">All Incidents</a>
        <a @click="fillData()" href="#" id="2">Random Integers</a>
      </ul>
    </div>
  </div>
</template>
