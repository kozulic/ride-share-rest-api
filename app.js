const express = require('express');

const config =  require('./config');
const express_loader = require('./loaders/express');

require('./loaders/mongoose');

const app = express();

express_loader(app);

const PORT = config.port || 8888;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on port ${PORT}`);
});