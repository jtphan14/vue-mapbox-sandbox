<script>
//
// import VueCharts from 'vue-chartjs'
// import { HorizontalBar, Line, mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins
//
// export default HorizontalBar.extend({
//   mounted () {
//     // Overwriting base render method with actual data.
//     this.renderChart({
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//       datasets: [
//         {
//           label: 'GitHub Commits',
//           backgroundColor: '#f87979',
//           data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
//         }
//       ],
//     })
//   },
//
// });

import { Bar, HorizontalBar } from 'vue-chartjs'

export default HorizontalBar.extend({
  data(){
    return {
      chartData: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  }
})
</script>
