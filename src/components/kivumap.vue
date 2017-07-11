<script>
  import Mapbox from 'mapbox-gl-vue'
  import Vue from 'vue/dist/vue.js'
  import incidents from 'src/assets/js/incidents'
  const _ = require('lodash');

  // import incidentComponent from './incident.vue'
  // import navComponent from './nav.vue'

  const mapboxgl = require('mapbox-gl')

  export default {
    data () {
      return {
        incidents: [],
        incidentLocations: []
      }
    },
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
    created() {
      let self = this;

      // self.incidentList();
    },
    methods: {
      incidentList(map){

        incidents.getIncidents();

        const incidentList = incidents.getIncidents()

        const promise      = incidentList.then((response) => {

          const { data } = response

          this.incidents = data

          this.normalizeIncidents(map)

          return data
        })
      },
      normalizeIncidents(map){

        const incidents    = this.incidents
        const mapIncidents = [];

        _.each(incidents, function(incident){

           const types = incident.types.data;

           const incidentTypes =  _.map(types, function(type){
             return type.name
           })

           const incidentPoint = {
               "type": "Feature",
               "geometry": incident.geometry,
               "properties": {
                     "ID": incident.properties.incident_id,
                     "incident_types": incidentTypes,
                     "start_date_time": incident.properties.start_date_time.date,
                     "end_date_time": incident.properties.end_date_time.date,
                     "location_details": incident.properties.location_details,
                     "total_victims": incident.properties.total_victims,


               }
           }

           mapIncidents.push(incidentPoint)

       })

        //  console.log({geometry});

        this.incidentLocations = mapIncidents;

        this.mapAddSource(map)

      },
      mapAddSource(map){

        const incidentLocations = this.incidentLocations;

        console.log({incidentLocations});

        // console.log(`hello ${JSON.stringify(incidentLocations,null,2)}`);

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
          });

      },
      mapLoaded(map) {
        console.log('Map Loaded!')

        this.incidentList(map)
        // map.addLayer({
    //     "id": "markers",
    //     "source": "markers",
    //     "type": "circle",
    //     "paint": {
    //       'circle-radius': {
    //         "type": "exponential",
    //         "property": 'total_victims',
    //         "stops": [
    //
    //           //Property based circle-radius
    //           // "verification_rating" is 0 -> circle radius will be .5px
    //
    //           // [0, .5],
    //           // [1, 20],
    //           // [2, 30],
    //           // [3, 40],
    //           // [4, 50],
    //           // [100, 5],
    //           // [200, 10],
    //
    //           //Zoom
    //           //zoom is 10 -> cirlce radius will be 10px
    //           // [10, 10],
    //           // [20, 20],
    //
    //           // zoom is 0 and "verification_rating" is 1 -> circle radius will be 10px
    //           // [{zoom: 0,  value: 1},  .5],
    //           // zoom is 0 and "verification_rating" is 2 -> circle radius will be 5px
    //           [{zoom: 0,  value: 100},   5],
    //           // zoom is 0 and "verification_rating" is 2 -> circle radius will be 5px
    //           [{zoom: 0,  value: 200},   20],
    //           // zoom is 0 and "verification_rating" is 2 -> circle radius will be 5px
    //           // [{zoom: 0,  value: 500},   50],
    //           // zoom is 10 and "verification_rating" is 1 -> circle radius will be 20px
    //           // [{zoom: 2,  value: 1},   .4],
    //           // zoom is 10 and "verification_rating" is 2 -> circle radius will be 10px
    //           [{zoom: 2,  value: 100},   10],
    //           [{zoom: 2,  value: 200},   4.8],
    //           // [{zoom: 2,  value: 200},   2.8],
    //
    //         ]
    //       },
    //       'circle-color': {
    //         "property": 'verification_rating',
    //         "stops": [
    //
    //           //Verification radius 0 -> circle color will be #fa946e
    //           [0, '#fa946e'],
    //           [1, '#c091e6'],
    //           [2, '#fa946e'],
    //           [3, '#c091e6'],
    //           [4, '#c091e6'],
    //           [5, '#c091e6'],
    //         ]
    //       },
    //       'circle-blur': {
    //         "property": 'verification_rating',
    //         "stops": [
    //
    //           //Verification radius 0 -> circle color will be #fa946e
    //           [0, 0],
    //           [1, 0.2],
    //           [2, 0.4],
    //           [3, 0.6],
    //           [4, 0.8],
    //           [5, 1],
    //         ]
    //       }
    //     }
    //   });

      },
      mapClicked(map, e){
        // console.log('Map Clicked!')
        this.addPopUp(map, e)
      },
      mapZoomend(map, e){
        // console.log('map zoomed');
        //
        // console.log('zoome', map.getZoom())

        var zoom = map.getZoom()
        var layer = map.getLayer('markers')
        // console.log('layer', map.getLayer('markers'))

        // layer.setRadius(1000)

        if (zoom > 10){
          // console.log('greater than 10')

          // layer.setRadius(1000)
        }
      },
      addPopUp(map, e) {
        // console.log('e', e);
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['markers']
        });
        if (!features.length) {
          return;
        }

        console.log('features')

        const feature     = features[0];
        const {properties}  = features[0];

        console.log('properties', properties);

        // const title = feature.properties.title;
        // const date = feature.properties.start_date_time;
        // const total_victims = feature.properties.total_victims;

        const popupContent = Vue.extend({

            template: '#template-name',
            data: function () {
              return {
                title: properties.location_details,
                date: properties.start_date_time,
                total_victims: properties.total_victims,
                incident_types: properties.incident_types
              }
            },
            methods: {
                popupClicked() {
                    alert('Popup Clicked!');
                },
            },
            created: function(){
              console.log('popupContent created')
            },
            mounted: function(){
              console.log('popupContent mounted')
            }
        });
        // Populate the popup and set its coordinates
        // based on the feature found.
        const popup = new mapboxgl.Popup()
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<div id="vue-popup-content"><div id="vue-popup" class="vue-popup">POPUP</div></div>')
          .addTo(map);
        //
        //   console.log('popup', popup);
        new popupContent().$mount('#vue-popup-content');

        // console.log('component', component);
        //
        // document.getElementById('vue-popup-content').appendChild(component.$el)
        // console.log('popupContent', newPopupContent);
      }
    }
  }
</script>

<template>
  <div id="map" class="map">
    <mapbox
    @map-load="mapLoaded"
    @map-addSource="mapAddSource"
    @map-click="mapClicked"
    @map-zoomend="mapZoomend"
    access-token="pk.eyJ1IjoiZmlmdHlhbmRmaWZ0eSIsImEiOiJjajFxdjVibmswMGptMndyaW5vb2VoOHBsIn0.aD863YaLh6B8Mg2cRgdl1Q"
    :map-options="{
      //Default Styles
      /*style: 'mapbox://styles/mapbox/streets-v8',*/
      //Fifty and Fifty Style
      style: 'mapbox://styles/fiftyandfifty/cj3xi1sjt1kdh2rmzd0rngkpu',
      zoom: 12,
      center: [-122.447303, 37.753574]
    }">
  </mapbox>
  </div>
</template>
