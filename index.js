'use strict';

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Port
const port = process.env.PORT || 3000;

// DB connection string
const uri = process.env.MONGOLAB_URI;

// Routes
const routes = require('./app/routes/api');

// Express
const app = express();

// Middelware
require('./app/middelware/basic')(app);
app.use('/', express.static('./public'));
app.use('/api', routes);

// Connection to database
mongoose.connect(uri, (err) => {
  console.log(err ? 'Connection to MongoDB failed!' : 'Connected to MongoDB at: ', uri);
});

// Connection to server
app.listen(port, (err) => {
  console.log(err ? 'Connection to Node server failed!' : 'Server listening on port: ', port);
});
