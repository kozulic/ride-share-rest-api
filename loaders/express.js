const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('../components/user/user-route');
const rideRoutes = require('../components/ride/ride-route');

const verifyToken = require('../middleware/verify-token');

module.exports = (app) => {
  app.use(cors());
  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/api/user', userRoutes);
  app.use('/api/ride', verifyToken, rideRoutes);

  return app;
}