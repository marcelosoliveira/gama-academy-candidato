const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  HOSTNAME: process.env.HOSTNAME,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  PORT: process.env.PORT || 3001,
};
