// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// ===========================================================
require("./routing/htmlroutes.js")(app)
require("./routing/apiroutes.js")(app)



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

