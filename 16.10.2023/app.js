var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var http= require('http');
var app = express();



app.use('/', indexRouter);
app.use('/kontakt', contactRouter);

module.exports = app;


