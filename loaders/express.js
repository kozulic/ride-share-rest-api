const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('../components/user/user-route');

module.exports = (app) => {
  app.use(cors());
  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/api/user', userRoutes);

  return app;
}