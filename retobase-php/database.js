const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'ibm-exam-mysql.mysql.database.azure.com',
  user: 'mysqladminun@ibm-exam-mysql',
  password: 'H@Sh1CoR3!',
  database: 'ibmexamdb',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
