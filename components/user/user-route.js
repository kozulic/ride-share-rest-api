const express = require('express');

const userController = require('./user-controller');
const verifyToken = require('../../middleware/verify-token');

const router = express.Router();

router.post('/register', userController.register);
router.post('/auth', userController.login);
router.get('/info', verifyToken, userController.info);
router.get('/myVehicles', verifyToken, userController.getVehicles);

module.exports = router;
