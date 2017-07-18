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
            custom: function(tooltip) {
              var tooltipEl = $('#chartjs-tooltip');
              if (!tooltipEl[0]) {
                $('body').append('<div id="chartjs-tooltip"></div>');
                tooltipEl = $('#chartjs-tooltip');
              }
              // Hide if no tooltip
              if (!tooltip.opacity) {
                tooltipEl.css({
                  opacity: 0
                });
                $('.chartjs-wrap canvas').each(function(index, el) {
                  $(el).css('cursor', 'default');
                });
                return;
              }
              $(this._chart.canvas).css('cursor', 'pointer');
              // Set caret Position
              tooltipEl.removeClass('above below no-transform');
              if (tooltip.yAlign) {
                tooltipEl.addClass(tooltip.yAlign);
              } else {
                tooltipEl.addClass('no-transform');
              }
              // Set Text
              if (tooltip.body) {
                var innerHtml = [
                  (tooltip.beforeTitle || []).join('\n'), (tooltip.title || []).join('\n'), (tooltip.afterTitle || []).join('\n'), (tooltip.beforeBody || []).join('\n'), (tooltip.body || []).join('\n'), (tooltip.afterBody || []).join('\n'), (tooltip.beforeFooter || [])
                  .join('\n'), (tooltip.footer || []).join('\n'), (tooltip.afterFooter || []).join('\n')
                ];
                tooltipEl.html(innerHtml.join('\n'));
              }
              // Find Y Location on page
              var top = 0;

              if (tooltip.yAlign) {
                var ch = 0;
                if (tooltip.caretHeight) {
                  ch = tooltip.caretHeight;
                }
                if (tooltip.yAlign == 'above') {
                  top = tooltip.y - ch - tooltip.caretPadding;
                } else {
                  top = tooltip.y + ch + tooltip.caretPadding;
                }
              }

              var position = $('#chart-area2').offset(); /* location within document */

              // Display, position, and set styles for font
              tooltipEl.css({
                opacity: 1,
                width: tooltip.width ? (tooltip.width + 'px') : 'auto',
                left: position.left + tooltip.x + 'px',
                top: position.top + top + 'px',
                fontFamily: tooltip._fontFamily,
                fontSize: tooltip.fontSize,
                fontStyle: tooltip._fontStyle,
                padding: tooltip.yPadding + 'px ' + tooltip.xPadding + 'px',
              });
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
