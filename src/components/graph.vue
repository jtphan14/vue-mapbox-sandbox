<script>

import Bar from './bar.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import * as types from '../store/types';


export default {
  components: {
    Bar
  },
  data () {
    return {
      datacollection: null,
      incidents: []
    }
  },
  mounted () {
    this.fillData()
  },
  computed: {
    ...mapGetters({
        allIncidents: types.ALL_INCIDENTS,
        filteredIncidents: types.FILTERED_INCIDENTS,
    })
  },
  methods: {
    getActors(){
      const incidents  = this.allIncidents;

      //Get List of Primary Perpetrators

      console.log('incidents', incidents);

      // Armed Groups by Incident Type


      // Restructure data to look like this.
      // $data =  [
      //     'FDRC' => [
      //         'murders' => 34
      //         'rapes' => 2
      //     ],
      //     'ADF' => [
      //         'murders' => 34
      //         'rapes' => 2
      //     ]
      // ];

      // Iterate through each incident.
      // 1. Get primary Perpetrator
      // 2. Iterate through each incident types
            // 2a. Get total victims per incident types
            // 2b. Add total victim count to armed group w/ incident type total count.

    },
    fillData () {
      console.log('fillData');

      this.getActors();
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
  <div class="graphwrapper">
    <div class='graph-filters'>
      <ul>
        <a href="#" id="2">Rapes :( </a>
        <a href="#" id="2">Violent Deaths :( </a>
        <a href="#" id="2">All Incidents</a>
        <a @click="fillData()" href="#" id="2">Random Integers</a>
      </ul>
    </div>
    <h1>Graph</h1>
    <bar :chart-data="datacollection"></bar>
  </div>
</template>
