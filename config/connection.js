var mysql      = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Mydog123",
    database: "burgers_db"
});
 
connection.connect();
 
connection.query('SELECT * FROM burger', function (error, results) {
  if (error) throw error;
  console.log('The data is: ', results);
});
 


module.exports = connection;