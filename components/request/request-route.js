const express = require('express');

const requestController = require('./request-controller');

const router = express.Router();

router.get('/driver/:driverId', requestController.getForDriver);
router.get('/passenger/:passengerId', requestController.getForPassenger);
router.post('/', requestController.create);
router.put('/:id', requestController.changeStatus);
router.delete('/:id', requestController.remove);

module.exports = router;