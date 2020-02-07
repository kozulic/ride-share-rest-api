const express = require('express');

const rideController = require('./ride-controller');

const router = express.Router();

router.get('/from/:from/to/:to/low/:lowTime/high/:highTime', rideController.searchForRides);
router.get('/user/:userId', rideController.getUserRideOffers);
router.get('/:id', rideController.getById);
router.post('/', rideController.create);
router.put('/:id', rideController.update);
router.delete('/:id', rideController.remove);

module.exports = router;