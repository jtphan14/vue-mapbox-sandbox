<script>
  import Mapbox from 'mapbox-gl-vue'
  import Vue from 'vue/dist/vue.js'
  import incidents from 'src/assets/js/incidents'
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import * as types from '../store/types';

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
    computed: {
      ...mapGetters({
          normalizedIncidents: types.NORMALIZED_INCIDENTS,
          map: types.MAP,
      })
    },
    created() {
      let self = this;

      // self.incidentList();
    },
    methods: {
      ...mapActions({
        asyncUpdateIncidents: types.ASYNCUPDATEINCIDENTS,
        asyncUpdateNormalizedIncidents: types.ASYNCUPDATE_NORMALIZED_INCIDENTS,
        asyncUpdateMap: types.ASYNCUPDATE_MAP
      }),
      incidentList(map){

        incidents.getIncidents();

        const incidentList = incidents.getIncidents()

        const promise      = incidentList.then((response) => {

          const { data } = response

          this.incidents = data

          this.asyncUpdateIncidents(data)

          this.normalizeIncidents(map)

          return data
        })
      },
      normalizeIncidents(map){

        const incidents    = this.incidents
        const mapIncidents = [];

        _.each(incidents, function(incident){

           const types  = incident.types.data;
           const actors = incident.actors.data;

           const incidentTypes = types.map( type => type.name)

          //  const incidentPoint = {
          //      "type": "Feature",
          //      "geometry": incident.geometry,
          //      "properties": {
          //            "ID": incident.properties.incident_id,
          //            "incident_types": incidentTypes,
          //            "start_date_time": incident.properties.start_date_time.date,
          //            "end_date_time": incident.properties.end_date_time.date,
          //            "location_details": incident.properties.location_details,
          //            "total_victims": incident.properties.total_victims,
          //            "primary_incident_type" : incidentTypes[0],
          //            "verification_rating" : incident.properties.verification_rating
          //      }
          //  }
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
                    //  "primary_incident_type" : "Rape",
                     "primary_incident_type" : incidentTypes[0],
                     "verification_rating" : incident.properties.verification_rating
               }
           }

           mapIncidents.push(incidentPoint)

       })

        //  console.log({geometry});
        this.asyncUpdateNormalizedIncidents(mapIncidents)

        this.incidentLocations = mapIncidents;

        this.mapAddSource(this.map)

      },
      mapUpdateSource(map){
        const incidentLocations = this.normalizedIncidents;

        console.log('mapittymap', map);

        const mapSource = map.getSource('markers')

        console.log('mapSource', mapSource);
        map.removeSource("markers")
        map.removeLayer("markers")
      },
      mapAddSource(map){
        // console.log('map', map);
        // console.log('mapstate', this.map);
        const incidentLocations = this.normalizedIncidents;

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
            "paint": {
              'circle-color': {
                  // "property": 'verification_rating',
                  // "stops": [
                  //
                  //   //Verification radius 0 -> circle color will be #fa946e
                    // [0, '#fa946e'],
                    // [1, '#c091e6'],
                    // [2, '#fa946e'],
                    // [3, '#c091e6'],
                    // [4, '#c091e6'],
                    // [5, '#c091e6'],
                  // ]

                  "property": 'primary_incident_type',

                  type: 'categorical',

                  "stops": [
                    //Verification radius 0 -> circle color will be #fa946e
                    ["Violent Deaths", '#fa946e'],
                    ["Rape", '#c091e6'],
                    // ["Clash", '#fa946e'],
                    // ["Abduction", '#c091e6'],
                    // ["Recruitment", '#c091e6'],
                    // ["Riots", '#c091e6'],
                  ]
                },
            }
          });

      },
      mapLoaded(map) {
        console.log('Map Loaded!')

        this.asyncUpdateMap(map)

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
        new popupContent().$mount('#vue-popup-content');

      }
    }
  }
</script>

<template>
  <div id="map" class="map">
    <h1>
      <a @click="mapUpdateSource(map)" href="#" id="1">Remove Map Source</a>
    </h1>
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
