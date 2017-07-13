const axios = require('axios');


function getIncidents () {
  return axios({
    method:'get',
    url:'http://kivuapi.fiftyandfifty.org/incidents/',
  })
  .then(function(response) {
    // console.log('response', response.data)
    return response.data
  });
}

function incidentWithoutPromise () {
  return axios({
    method:'get',
    url:'http://kivuapi.fiftyandfifty.org/incidents/',
  })
  .then(function(response) {
    console.log('incidentw/opromise');
    // console.log('response', response.data)
    // this.$store.commit('types.SET_INCIDENTS', response.data) // set the user in the store

    return response.data
  });
}

module.exports = {
  getIncidents,
  incidentWithoutPromise
}
