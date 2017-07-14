<script>
import VueChart from 'vue-chart-js'

export default {
  components: {
    VueChart
  },

  data: () => ({
    chartData: {
        labels: ['Violent Deaths', 'Rape', 'Item 3'],
        datasets: [
            {
                label: 'Mai Mai',
                backgroundColor : "rgba(220,220,220,0.5)",
        				strokeColor : "rgba(220,220,220,1)",
        				pointColor : "rgba(220,220,220,1)",
        				pointStrokeColor : "#fff",
                data: [10, 20, 30],
                fillColor : "rgba(220,220,220,0.5)",
            },
            {
                label: 'FDLR',
                backgroundColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data: [20, 30, 40]
            }
        ]
    }
  }),
}
</script>

<template>
  <div class="graphwrapper">
    <h1>Graph</h1>
    <vue-chart type="horizontalBar" :data="chartData"></vue-chart>
  </div>
</template>
