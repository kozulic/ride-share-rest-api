const mongoose = require('mongoose');

const config =  require('../config');

mongoose.connect(config.db.connectionString, { useNewUrlParser: true, useFindAndModify: false, 
  useUnifiedTopology: true}, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Successful connection to ${config.db.connectionString}`);
});