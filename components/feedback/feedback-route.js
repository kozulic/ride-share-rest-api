const express = require('express');

const feedbackController = require('./feedback-controller');

const router = express.Router();

router.get('/user/:userId', feedbackController.getForUser);
router.get('/ride/:rideId', feedbackController.getForRide);
router.post('/', feedbackController.create);
router.put('/:id', feedbackController.update);
router.delete('/:id', feedbackController.remove);

module.exports = router;
