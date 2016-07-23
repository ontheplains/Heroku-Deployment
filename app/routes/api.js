'use strict';

// Dependencies
const express = require('express');

// Controller
const userCtrl = require('../controllers/userCtrl');
const placeCtrl = require('../controllers/placeCtrl');

// Router
const router = express.Router();

// Users
router.post('/users', userCtrl.create);
router.get('/users', userCtrl.read);
router.put('/users/:userId', userCtrl.update);
router.delete('/users/:userId', userCtrl.delete);

// Places
router.post('/places', placeCtrl.create);
router.get('/places', placeCtrl.read);
router.put('/places/:placeId', placeCtrl.update);
router.delete('/places/:placeId', placeCtrl.delete);

module.exports = router;
