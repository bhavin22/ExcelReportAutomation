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
require(path.join(__dirname, 'route.js'))(app, path);
var config = require(path.join(__dirname, 'config.js'));

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	require(path.join(__dirname , "db.js"))(app, db, assert, config);
	app.listen(3000);
});

