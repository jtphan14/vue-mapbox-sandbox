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

module.exports = {
  getIncidents,
}
