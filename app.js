var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');

var app = express();

var PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

mongoose.connect('mongodb://lansky:vespadark2@ds249025.mlab.com:49025/simpleapi1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', itemRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
