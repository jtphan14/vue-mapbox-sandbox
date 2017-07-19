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

import { Bar, HorizontalBar, mixins } from 'vue-chartjs'
import $ from 'jquery'

const { reactiveProp } = mixins
// const $ = require('jquery')


export default HorizontalBar.extend({
  // mixins: [reactiveProp],
  data(){
    return {
      graphData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
            enabled: false,
            custom: function(tooltipModel) {

              // console.log('tooltipModel', tooltipModel);
               // Tooltip Element
               var tooltipEl = document.getElementById('chartjs-tooltip');

              //  console.log('tooltipEl', tooltipEl);
               // Create element on first render
               if (!tooltipEl) {
                   tooltipEl = document.createElement('div');
                   tooltipEl.id = 'chartjs-tooltip';
                   tooltipEl.innerHTML = "<table></table>"
                   document.body.appendChild(tooltipEl);
               }

               // Hide if no tooltip
               if (tooltipModel.opacity === 0) {
                   tooltipEl.style.opacity = 0;
                   return;
               }

               // Set caret Position
               tooltipEl.classList.remove('above', 'below', 'no-transform');
               if (tooltipModel.yAlign) {
                   tooltipEl.classList.add(tooltipModel.yAlign);
               } else {
                   tooltipEl.classList.add('no-transform');
               }

               function getBody(bodyItem) {
                   return bodyItem.lines;
               }

               // Set Text
               if (tooltipModel.body) {
                   var titleLines = tooltipModel.title || [];
                   var bodyLines = tooltipModel.body.map(getBody);

                   var innerHtml = '<thead>';

                   titleLines.forEach(function(title) {
                       innerHtml += '<tr><th>' + title + '</th></tr>';
                   });
                   innerHtml += '</thead><tbody>';

                   bodyLines.forEach(function(body, i) {
                       var colors = tooltipModel.labelColors[i];
                       var style = 'background:' + colors.backgroundColor;
                       style += '; border-color:' + colors.borderColor;
                       style += '; border-width: 2px';
                       var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                       innerHtml += '<tr><td>' + span + body + '</td></tr>';
                   });
                   innerHtml += '</tbody>';

                   var tableRoot = tooltipEl.querySelector('table');
                   tableRoot.innerHTML = innerHtml;
               }

               // `this` will be the overall tooltip
               var position = this._chart.canvas.getBoundingClientRect();

              //  console.log('position', position);

              console.log('tooltipModel.caretX', tooltipModel.caretX);
              console.log('tooltipModel.caretY', tooltipModel.caretY);
               // Display, position, and set styles for font
               tooltipEl.style.opacity = 1;
               tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
               tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
               tooltipEl.style.fontFamily = tooltipModel._fontFamily;
               tooltipEl.style.fontSize = tooltipModel.fontSize;
               tooltipEl.style.fontStyle = tooltipModel._fontStyle;
               tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';

               console.log('tooltipEl', tooltipEl);
           }
        }
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.graphData, this.options)
  }
})
</script>
