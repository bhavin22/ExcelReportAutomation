var express = require('express');
var http = require('http');
var path =  require("path");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/reportAutomation';

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	require(path.join(__dirname, 'route.js'))(app, path, db, assert);
	app.listen(3000);
});

