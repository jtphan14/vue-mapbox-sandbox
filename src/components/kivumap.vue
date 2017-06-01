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
    }
  }
</script>

<template>
  <div id="map" class="map">
    <mapbox
    access-token="pk.eyJ1IjoiZmlmdHlhbmRmaWZ0eSIsImEiOiJjajFxdjVibmswMGptMndyaW5vb2VoOHBsIn0.aD863YaLh6B8Mg2cRgdl1Q"
    :map-options="{
    	style: 'mapbox://styles/fiftyandfifty/cj3656bvt000h2smugognpdh1',
    	center: [-96, 37.8],
    	zoom: 3
    }">
  </mapbox>
  </div>
</template>
