module.exports = function(app, path, db, assert) {
	app.use(function (req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    next();
	});
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname + '/public/index.html'));
	});

	app.get('/getNoDiaryData', function(req, res){
		var cursor = db.collection('no_diary').find();
		var data = [];
		cursor.each(function(err, doc) {
	      	assert.equal(err, null);
	      	if (doc != null) {
	      		data.push(doc);
	      	} else {
	      		res.send(JSON.stringfy(data));
	      	}
	   });
	});

	app.post('/setRaisedCheck', function(req, res){
		var data = JSON.parse(req.body.params);
		if(data) {
			db.collection('no_diary').remove();
			db.collection('no_diary').insertOne(data, function(err, r) {
				assert.equal(null, err);
	    		res.send();
	    	});
		}
	});
};