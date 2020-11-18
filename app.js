var express = require('express');

var file = require('./controllers/file');
var app = express();


app.use(file);


module.exports = app;
