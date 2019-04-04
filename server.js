// Dependencies
// ========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//go to the root html page
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'home.html'));
})
// Data
// ========================================================





// Routes
// ========================================================




// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });