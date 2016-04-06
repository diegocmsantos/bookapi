var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookapi');
var Book = require('./models/book');
var app = new express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function(req,res) {

  res.send('Hello');

});

app.listen(port, function() {
  console.log("Running on PORT: " + port);
});