<script>
  import Mapbox from 'mapbox-gl-vue'
  const mapboxgl = require('mapbox-gl')

  export default {
    props: {
      accessToken: {
        Type: String,
        Required: true
      },
      mapOptions: {
        Type: Object,
        Required: true
      },
    },
    components: {
      'mapbox': Mapbox
    },
    methods: {
      mapLoaded(map) {
        console.log('Map Loaded!')

        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [{
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-77.03238901390978, 38.913188059745586]
                },
                'properties': {
                  'title': 'Mapbox DC',
                  'icon': 'monument'
                }
              }, {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.414, 37.776]
                  },
                  'properties': {
                    'title': 'Mapbox SF',
                    'icon': 'harbor'
                  }
                }, {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [-117.158633, 32.709384]
                  },
                  'properties': {
                    'title': 'Fifty and Fifty',
                    'icon': 'harbor'
                  }
                }]
            }
          },
          'layout': {
            'icon-image': '{icon}-15',
            'text-field': '{title}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top'
          }
        });
      },
      mapClicked(map, e){
        console.log('Map Clicked!')
      }
    }
  }
</script>

<template>
  <div id="map" class="map">
    <mapbox
    @map-load="mapLoaded"
    access-token="pk.eyJ1IjoiZmlmdHlhbmRmaWZ0eSIsImEiOiJjajFxdjVibmswMGptMndyaW5vb2VoOHBsIn0.aD863YaLh6B8Mg2cRgdl1Q"
    :map-options="{
      style: 'mapbox://styles/fiftyandfifty/cj3g6it5p00122rnyetxu6rrq',
      center: [-122.420679, 37.772537],
    	zoom: 3
    }">
  </mapbox>
  </div>
</template>
