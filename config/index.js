const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env'});

module.exports = {
  port: process.env.PORT,
  db: {
    connectionString: process.env.DB_CONNECTION_STRING
  },
  secret: process.env.SECRET
}