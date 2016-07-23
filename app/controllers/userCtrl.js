'use strict';

// Model
const User = require('../models/User');

function create(req, res) {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    err ? res.status(500).send(err) : res.json(user)
  });
}

function read(req, res) {
  User
  .find()
  .populate('favorite_places', 'name')
  .exec((err, user) => {
    err ? res.status(500).send(err) : res.json(user)
  });
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$push: {favorite_places: req.body.favorite_places}}, (err, user) => {
    err ? res.status(500).send(err) : res.json(user)
  });
}

function destroy(req, res) {
  User.findByIdAndRemove(req.params.userId, (err, user) => {
    err ? res.status(500).send(err) : res.json(user)
  });
}

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: destroy
};
