var express = require('express');
var http = require('http');
var path =  require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require(path.join(__dirname, 'route.js'))(app, path);

app.listen(3000);
console.log("Connected");