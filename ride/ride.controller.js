var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var node_geocoder = require('node-geocoder');
var geo_options = {
  provider: 'google',
};

var ride_schema = require('./ride');
var geocoder = node_geocoder(geo_options);
var api = express.Router();
var Ride = mongoose.model('Ride', ride_schema);

function requestValid(body){
  var count = 0;
  for(var field in body){
    //check if any fields are empty
    if(body[field] === ''){
      return false;
    }
    count++;
  }

  //make sure date is valid
  console.log(body.departure_time);
  if(!moment(body.departure_time, "MM-DD-YYYY h:mm a").isValid()){
    return false;
  }

  // make sure all fields are accounted for
  if(count !== 5){
    return false;
  }

  return true;
}

function configureBody(body, data){

  // Transform date.string to actual date type
  var dateString = body.departure_time;
  var convert = moment(dateString, "MM-DD-YYYY h:mm a");
  body.departure_time = convert;

  // Get long and lat for arrival and depart address
  var locations = geocodeAddress([body.departure_location,body.arrival_location], function(callback){
    body.departure_longitude = callback.departure.longitude;
    body.departure_latitude = callback.departure.latitude;
    body.arrival_longitude = callback.arrival.longitude;
    body.arrival_latitude = callback.arrival.latitude;
    data(body);
  });
}

function geocodeAddress(addr,callback){
  geocoder.batchGeocode(addr)
  .then(function(res) {
    callback({
      "departure": {
        "latitude":res[0].value[0].latitude,
        "longitude": res[0].value[0].longitude
      },
      "arrival": {
        "latitude":res[1].value[0].latitude,
        "longitude": res[1].value[0].longitude
      }
    })
  })
  .catch(function(err) {
    console.log(err);
  });

}

function rideController(api){
  /*
   * GET: Request to pull all rides currently in DB
   *  TODO: Add query parameters for more detail searching
   */
  api.get('/rides', (req, res) => {
    console.log("this is a get in rides")
    Ride.where('createdBy')
    .exec(function (err, rides) {
      if (err) return handleError(err);
      res.json(rides);
    })
  })

  /*
   * POST: Create a ride and add to db
   * Client must give 5 fields (departure_time, departure_location, arrival_location,
   * seats_available, created_by:User.id)
   */
  api.post('/rides', (req, res) => {
    // Check is request is valid
    if(requestValid(req.body)){
      // Create Ride and save
      var new_body;
      var configuredBody = configureBody(req.body, function(data){
        var rideToSave = new Ride(data);
        rideToSave.save(function (err) {
          if (err) return console.log(err);
        });

        //Send saved ride in DB back to user
        res.json(rideToSave);

      });

    } else {
      // Send error response
      res.status(500).send('Something broke! check your params');
    }
  })
}

module.exports = rideController;
