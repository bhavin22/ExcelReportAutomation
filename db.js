module.exports = function(app, db, assert) {
	app.get('/getNoDiaryData', function(req, res){
		var cursor = db.collection('no_diary').find();
		var data = [];
		cursor.each(function(err, doc) {
	      	assert.equal(err, null);
	      	if (doc != null) {
	      		data.push(doc);
	      	} else {
	      		res.send(JSON.stringify(data));
	      	}
	   });
	});

	app.post('/updateRaisedCheck', function(req, res){
		var raised = req.body.raised;
		var unraised = req.body.unraised;
		
		for(var i=0; i<raised.length; i++) {
			db.collection('no_diary').updateMany(
		   	{ "Client Code": raised[i] },
		   	{ $set: { "Raised Diaries": 1 } }, 
		   	function(err, results) {
		   	});
		}

		for(var i=0; i<unraised.length; i++) {
			db.collection('no_diary').updateMany(
		   	{ "Client Code": unraised[i] },
		   	{ $set: { "Raised Diaries": 0 } }, 
		   	function(err, results) {
		   	});
		}
		res.send();
	});
};