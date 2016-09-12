const express = require('express')
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const assert = require('assert');
const app = express();
const api = express.Router();

// process.env.PORT allows heroku to set the port accordingly
// local = 3000
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

// Connection URL for db
var url = 'mongodb://admin:hacks@ds019946.mlab.com:19946/ryde-board';

// Connect mongoose as well
mongoose.connect(url, function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server w/ mongoose");
});

var db = mongoose.connection;

app.use(bodyParser.json());

//List of Products in
require('./ride').controller(api);
require('./user').controller(app);

// apply the routes to our application with the prefix /api
app.use('/api', api);

// Close connection for mongoose
//mongoose.connection.close();

app.get('/', (request, response) => {
  response.send('uRyde Board - Alpha')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Server is listening on ${port}`)
})
