<script>

import Bar from './bar.vue'

export default {
  components: {
    Bar
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    },
    methods: {
      fillData () {
        console.log('fillData');

        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
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
