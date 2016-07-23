'use strict';

// Model
const Place = require('../models/Place');

function create(req, res) {
  const newPlace = new Place(req.body);
  newPlace.save((err, place) => {
    err ? res.status(500).send(err) : res.json(place)
  });
}

function read(req, res) {
  Place
  .find()
  .exec((err, places) => {
    err ? res.status(500).send(err) : res.json(places)
  });
}

function update(req, res) {
  Place.findByIdAndUpdate(req.params.placeId, req.body, (err, place) => {
    err ? res.status(500).send(err) : res.json(place)
  });
}

function destroy(req, res) {
  Place.findByIdAndRemove(req.params.placeId, (err, place) => {
    err ? res.status(500).send(err) : res.json(place)
  });
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: destroy
};
