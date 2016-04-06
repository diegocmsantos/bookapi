var express = require('express');

var app = new express();
var port = process.env.PORT || 3000;

app.get('/', function(req,res) {

  res.send('Hello');

});

app.listen(port, function() {
  console.log("Running on PORT: " + port);
});