const mysql = require('mysql2/promise');
const { 
  HOSTNAME,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require('./application');

const connection = mysql.createPool({
  host: HOSTNAME,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: 'cad_candidate',
  port: 3306,
});

module.exports = connection;
