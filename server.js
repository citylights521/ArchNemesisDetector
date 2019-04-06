// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'))

//loads apiRoutes.js module and passes the app, path, and the current running directory 
var apiRoutes = require("./app/routing/apiRoutes.js")(app, path, __dirname);

//loads htmlRoutes.js module and passes the app, path, and the current running directory 
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app, path, __dirname);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });