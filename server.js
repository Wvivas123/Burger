
const connection = require("./config/connection.js")
var routes = require("./controllers/burgers_controller.js");
var express = require('express');
var exphbs  = require('express-handlebars');
const bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});





