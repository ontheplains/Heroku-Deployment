'use strict';

// Dependencies
const mongoose = require('mongoose');
const Place = require('./Place');

// Mongoose schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	favorite_places: [{ type: Schema.Types.ObjectId, ref: 'Place'}]
});

module.exports = mongoose.model('User', userSchema);
