
const connection = require("./config/connection.js")
var routes = require("./controllers/burgers_controller.js");
var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/Public'));

app.get('/', function (req, res) {
    //query to db
    connection.query('SELECT * FROM burger', function (error, results, fields) {
        if (error) throw error;
        // connected!
        res.render('index', {burger: results});
      });
    
});
 
app.listen(3000);


