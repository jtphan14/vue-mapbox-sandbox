<script>
  import Mapbox from 'mapbox-gl-vue'
  import Vue from 'vue/dist/vue.js'
  // import incidentComponent from './incident.vue'
  // import navComponent from './nav.vue'

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
          'url': 'mapbox://styles/fiftyandfifty/cj3656bvt000h2smugognpdh1',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    "145.70383700",
                    "-38.52436600"
                  ]
                },
                "properties": {
                  "incident_id": 8,
                  "hash": "vCTNuJQr1c",
                  "title": "Sample Title",
                  "start_date_time": "2017-12-11 00:00:00",
                  "end_date_time": "2018-03-26 00:00:00",
                  "status": "0",
                  "location_details": null,
                  "total_victims": 313,
                  "verification_rating": 5
                },
              }
              ,{
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      "-165.08437200",
                      "36.12717500"
                  ]
              },
              "properties": {
                  "incident_id": 9790,
                  "hash": "4sB9d5Yzx1",
                  "title": "Nihil numquam cupiditate dolorum autem quia quibusdam.",
                  "start_date_time": {
                      "date": "2017-12-27 00:00:00.000000",
                      "timezone_type": 3,
                      "timezone": "UTC"
                  },
                  "end_date_time": {
                      "date": "2018-01-17 00:00:00.000000",
                      "timezone_type": 3,
                      "timezone": "UTC"
                  },
                  "status": "1",
                  "location_details": null,
                  "total_victims": 410,
                  "verification_rating": 5
              },
              "types": {
                  "data": [
                      {
                          "type_id": 1,
                          "name": "Violent Deaths"
                      },
                      {
                          "type_id": 2,
                          "name": "Rape"
                      }
                  ]
              },
              "actors": {
                  "data": [
                      {
                          "actor_id": 1,
                          "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                          "armed_group": 1
                      },
                      {
                          "actor_id": 2,
                          "name": "Iure minus beatae voluptas perferendis qui ab.",
                          "armed_group": 1
                      },
                      {
                          "actor_id": 3,
                          "name": "Magnam quibusdam nulla perferendis quia.",
                          "armed_group": 0
                      },
                      {
                          "actor_id": 4,
                          "name": "Modi officia aliquam tempore.",
                          "armed_group": 1
                      },
                      {
                          "actor_id": 5,
                          "name": "Autem atque dolores qui tenetur pariatur et molestiae illum.",
                          "armed_group": 1
                      },
                      {
                          "actor_id": 6,
                          "name": "Sed itaque eveniet voluptas modi.",
                          "armed_group": 0
                      },
                      {
                          "actor_id": 7,
                          "name": "Voluptatibus est eos asperiores ullam nobis dolores sequi.",
                          "armed_group": 0
                      },
                      {
                          "actor_id": 8,
                          "name": "Enim labore assumenda sunt.",
                          "armed_group": 0
                      }
                  ]
              },
              "weapons": {
                  "data": [
                      {
                          "weapon_id": 1,
                          "name": "Ancient Battle Axe"
                      },
                      {
                          "weapon_id": 2,
                          "name": "Ancient Short Sword"
                      },
                      {
                          "weapon_id": 3,
                          "name": "Boomerang"
                      }
                  ]
              },
              "locations": {
                  "data": [
                      {
                          "location_id": 1,
                          "name": "Brazzaville",
                          "location_type": "Community"
                      },
                      {
                          "location_id": 2,
                          "name": "Pointe-Noire",
                          "location_type": "Community"
                      },
                      {
                          "location_id": 3,
                          "name": "Dolisie",
                          "location_type": "Community"
                      },
                      {
                          "location_id": 4,
                          "name": "Kayes",
                          "location_type": "Village"
                      }
                  ]
              }
          },
          {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "161.09136200",
                    "15.44289800"
                ]
            },
            "properties": {
                "incident_id": 5496,
                "hash": "28NYZTGJhf",
                "title": "Dolor id aliquid animi ipsum vitae cum consequatur.",
                "start_date_time": {
                    "date": "2017-12-27 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "end_date_time": {
                    "date": "2018-08-01 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "status": "2",
                "location_details": null,
                "total_victims": 417,
                "verification_rating": 4
            },
            "types": {
                "data": [
                    {
                        "type_id": 1,
                        "name": "Violent Deaths"
                    }
                ]
            },
            "actors": {
                "data": [
                    {
                        "actor_id": 1,
                        "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 2,
                        "name": "Iure minus beatae voluptas perferendis qui ab.",
                        "armed_group": 1
                    }
                ]
            },
            "weapons": {
                "data": [
                    {
                        "weapon_id": 1,
                        "name": "Ancient Battle Axe"
                    },
                    {
                        "weapon_id": 2,
                        "name": "Ancient Short Sword"
                    },
                    {
                        "weapon_id": 3,
                        "name": "Boomerang"
                    },
                    {
                        "weapon_id": 4,
                        "name": "Ceremonial Trident"
                    },
                    {
                        "weapon_id": 5,
                        "name": "Eightfold Longblade"
                    },
                    {
                        "weapon_id": 6,
                        "name": "Zora Sword"
                    },
                    {
                        "weapon_id": 7,
                        "name": "Traveler's Sword"
                    }
                ]
            },
            "locations": {
                "data": [
                    {
                        "location_id": 1,
                        "name": "Brazzaville",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 2,
                        "name": "Pointe-Noire",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 3,
                        "name": "Dolisie",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 4,
                        "name": "Kayes",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 5,
                        "name": "Owando",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 6,
                        "name": "Ouésso",
                        "location_type": "Groupement"
                    },
                    {
                        "location_id": 7,
                        "name": "Loandjili",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 8,
                        "name": "Madingou",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 9,
                        "name": "Gamboma",
                        "location_type": "Territy"
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "21.96661600",
                    "-12.61068000"
                ]
            },
            "properties": {
                "incident_id": 6336,
                "hash": "PCfbmoKETt",
                "title": "Asperiores perferendis est corrupti vel non animi laudantium aspernatur.",
                "start_date_time": {
                    "date": "2017-12-27 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "end_date_time": {
                    "date": "2018-08-01 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "status": "0",
                "location_details": null,
                "total_victims": 573,
                "verification_rating": 4
            },
            "types": {
                "data": [
                    {
                        "type_id": 1,
                        "name": "Violent Deaths"
                    },
                    {
                        "type_id": 2,
                        "name": "Rape"
                    },
                    {
                        "type_id": 3,
                        "name": "Clash"
                    },
                    {
                        "type_id": 4,
                        "name": "Abduction"
                    },
                    {
                        "type_id": 5,
                        "name": "Recruitment"
                    },
                    {
                        "type_id": 6,
                        "name": "Kidnap for Ransom"
                    },
                    {
                        "type_id": 7,
                        "name": "Returning"
                    },
                    {
                        "type_id": 8,
                        "name": "Destruction of Property"
                    },
                    {
                        "type_id": 9,
                        "name": "Political Repression"
                    },
                    {
                        "type_id": 10,
                        "name": "Riots"
                    },
                    {
                        "type_id": 11,
                        "name": "Looting"
                    }
                ]
            },
            "actors": {
                "data": [
                    {
                        "actor_id": 1,
                        "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 2,
                        "name": "Iure minus beatae voluptas perferendis qui ab.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 3,
                        "name": "Magnam quibusdam nulla perferendis quia.",
                        "armed_group": 0
                    },
                    {
                        "actor_id": 4,
                        "name": "Modi officia aliquam tempore.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 5,
                        "name": "Autem atque dolores qui tenetur pariatur et molestiae illum.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 6,
                        "name": "Sed itaque eveniet voluptas modi.",
                        "armed_group": 0
                    },
                    {
                        "actor_id": 7,
                        "name": "Voluptatibus est eos asperiores ullam nobis dolores sequi.",
                        "armed_group": 0
                    },
                    {
                        "actor_id": 8,
                        "name": "Enim labore assumenda sunt.",
                        "armed_group": 0
                    }
                ]
            },
            "weapons": {
                "data": [
                    {
                        "weapon_id": 1,
                        "name": "Ancient Battle Axe"
                    }
                ]
            },
            "locations": {
                "data": [
                    {
                        "location_id": 1,
                        "name": "Brazzaville",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 2,
                        "name": "Pointe-Noire",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 3,
                        "name": "Dolisie",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 4,
                        "name": "Kayes",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 5,
                        "name": "Owando",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 6,
                        "name": "Ouésso",
                        "location_type": "Groupement"
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-7.75816900",
                    "10.45689700"
                ]
            },
            "properties": {
                "incident_id": 853,
                "hash": "Le3FM41ysV",
                "title": "Ullam similique consequatur tempore facilis.",
                "start_date_time": {
                    "date": "2017-12-26 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "end_date_time": {
                    "date": "2018-07-03 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "status": "0",
                "location_details": null,
                "total_victims": 413,
                "verification_rating": 4
            },
            "types": {
                "data": [
                    {
                        "type_id": 1,
                        "name": "Violent Deaths"
                    },
                    {
                        "type_id": 2,
                        "name": "Rape"
                    },
                    {
                        "type_id": 3,
                        "name": "Clash"
                    },
                    {
                        "type_id": 4,
                        "name": "Abduction"
                    },
                    {
                        "type_id": 5,
                        "name": "Recruitment"
                    },
                    {
                        "type_id": 6,
                        "name": "Kidnap for Ransom"
                    },
                    {
                        "type_id": 7,
                        "name": "Returning"
                    },
                    {
                        "type_id": 8,
                        "name": "Destruction of Property"
                    },
                    {
                        "type_id": 9,
                        "name": "Political Repression"
                    },
                    {
                        "type_id": 10,
                        "name": "Riots"
                    },
                    {
                        "type_id": 11,
                        "name": "Looting"
                    }
                ]
            },
            "actors": {
                "data": [
                    {
                        "actor_id": 1,
                        "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 2,
                        "name": "Iure minus beatae voluptas perferendis qui ab.",
                        "armed_group": 1
                    }
                ]
            },
            "weapons": {
                "data": [
                    {
                        "weapon_id": 1,
                        "name": "Ancient Battle Axe"
                    },
                    {
                        "weapon_id": 2,
                        "name": "Ancient Short Sword"
                    }
                ]
            },
            "locations": {
                "data": [
                    {
                        "location_id": 1,
                        "name": "Brazzaville",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 2,
                        "name": "Pointe-Noire",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 3,
                        "name": "Dolisie",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 4,
                        "name": "Kayes",
                        "location_type": "Village"
                    },
                    {
                        "location_id": 5,
                        "name": "Owando",
                        "location_type": "Village"
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "112.68813200",
                    "0.77543300"
                ]
            },
            "properties": {
                "incident_id": 9681,
                "hash": "WuVbqQ0yrR",
                "title": "Dicta maiores dolores est velit velit debitis veritatis.",
                "start_date_time": {
                    "date": "2017-12-26 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "end_date_time": {
                    "date": "2018-09-04 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "status": "2",
                "location_details": null,
                "total_victims": 435,
                "verification_rating": 5
            },
            "types": {
                "data": [
                    {
                        "type_id": 1,
                        "name": "Violent Deaths"
                    },
                    {
                        "type_id": 2,
                        "name": "Rape"
                    },
                    {
                        "type_id": 3,
                        "name": "Clash"
                    },
                    {
                        "type_id": 4,
                        "name": "Abduction"
                    }
                ]
            },
            "actors": {
                "data": [
                    {
                        "actor_id": 1,
                        "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                        "armed_group": 1
                    }
                ]
            },
            "weapons": {
                "data": [
                    {
                        "weapon_id": 1,
                        "name": "Ancient Battle Axe"
                    },
                    {
                        "weapon_id": 2,
                        "name": "Ancient Short Sword"
                    },
                    {
                        "weapon_id": 3,
                        "name": "Boomerang"
                    },
                    {
                        "weapon_id": 4,
                        "name": "Ceremonial Trident"
                    }
                ]
            },
            "locations": {
                "data": [
                    {
                        "location_id": 1,
                        "name": "Brazzaville",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 2,
                        "name": "Pointe-Noire",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 3,
                        "name": "Dolisie",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 4,
                        "name": "Kayes",
                        "location_type": "Village"
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-142.27962800",
                    "-79.33470300"
                ]
            },
            "properties": {
                "incident_id": 567,
                "hash": "woDFTJ8Y8t",
                "title": "Fugit et a et ut mollitia eos harum possimus.",
                "start_date_time": {
                    "date": "2017-12-25 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "end_date_time": {
                    "date": "2018-11-26 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "UTC"
                },
                "status": "0",
                "location_details": null,
                "total_victims": 504,
                "verification_rating": 4
            },
            "types": {
                "data": [
                    {
                        "type_id": 1,
                        "name": "Violent Deaths"
                    },
                    {
                        "type_id": 2,
                        "name": "Rape"
                    },
                    {
                        "type_id": 3,
                        "name": "Clash"
                    },
                    {
                        "type_id": 4,
                        "name": "Abduction"
                    },
                    {
                        "type_id": 5,
                        "name": "Recruitment"
                    },
                    {
                        "type_id": 6,
                        "name": "Kidnap for Ransom"
                    },
                    {
                        "type_id": 7,
                        "name": "Returning"
                    },
                    {
                        "type_id": 8,
                        "name": "Destruction of Property"
                    }
                ]
            },
            "actors": {
                "data": [
                    {
                        "actor_id": 1,
                        "name": "Praesentium voluptate aliquam similique ad id inventore nisi.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 2,
                        "name": "Iure minus beatae voluptas perferendis qui ab.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 3,
                        "name": "Magnam quibusdam nulla perferendis quia.",
                        "armed_group": 0
                    },
                    {
                        "actor_id": 4,
                        "name": "Modi officia aliquam tempore.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 5,
                        "name": "Autem atque dolores qui tenetur pariatur et molestiae illum.",
                        "armed_group": 1
                    },
                    {
                        "actor_id": 6,
                        "name": "Sed itaque eveniet voluptas modi.",
                        "armed_group": 0
                    },
                    {
                        "actor_id": 7,
                        "name": "Voluptatibus est eos asperiores ullam nobis dolores sequi.",
                        "armed_group": 0
                    }
                ]
            },
            "weapons": {
                "data": [
                    {
                        "weapon_id": 1,
                        "name": "Ancient Battle Axe"
                    },
                    {
                        "weapon_id": 2,
                        "name": "Ancient Short Sword"
                    },
                    {
                        "weapon_id": 3,
                        "name": "Boomerang"
                    },
                    {
                        "weapon_id": 4,
                        "name": "Ceremonial Trident"
                    },
                    {
                        "weapon_id": 5,
                        "name": "Eightfold Longblade"
                    },
                    {
                        "weapon_id": 6,
                        "name": "Zora Sword"
                    }
                ]
            },
            "locations": {
                "data": [
                    {
                        "location_id": 1,
                        "name": "Brazzaville",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 2,
                        "name": "Pointe-Noire",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 3,
                        "name": "Dolisie",
                        "location_type": "Community"
                    },
                    {
                        "location_id": 4,
                        "name": "Kayes",
                        "location_type": "Village"
                    }
                ]
              }
            },
            ]
            }
          },
          'layout': {
            'icon-image': '{icon}-15',
            'text-field': '{title}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            'text-transform': 'uppercase'
          },
          "paint": {
            "text-opacity": 0.7,
          }
        });
      },
      mapClicked(map, e){
        console.log('Map Clicked!')
        this.addPopUp(map, e)
      },
      addPopUp(map, e) {
        console.log('e', e);
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['points']
        });
        if (!features.length) {
          return;
        }

        console.log('features')

        const feature = features[0];
        console.log('features', feature)

        const title = feature.properties.title;
        const date = feature.properties.start_date_time;
        const total_victims = feature.properties.total_victims;

        const popupContent = Vue.extend({

            template: '#template-name',
            data: function () {
              return {
                title: title,
                date: date,
                total_victims: total_victims
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
    @map-click="mapClicked"
    access-token="pk.eyJ1IjoiZmlmdHlhbmRmaWZ0eSIsImEiOiJjajFxdjVibmswMGptMndyaW5vb2VoOHBsIn0.aD863YaLh6B8Mg2cRgdl1Q"
    :map-options="{
      style: 'mapbox://styles/fiftyandfifty/cj3656bvt000h2smugognpdh1',
      center: [-122.420679, 37.772537],
    	zoom: 3
    }">
  </mapbox>
  </div>
</template>
