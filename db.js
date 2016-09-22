module.exports = function(app, db, assert, config) {
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

	app.post('/login', function(req, res){
		var user_name = req.body.user_name;
		var password = req.body.password;
		var msg = "";
		if(user_name == "") {
			msg = "Please enter user name";
		} else if(password == "") {
			msg = "Please enter password";
		} else if(user_name != config.USER_NAME) {
			msg = "Please enter valid user name";
		} else if(password != config.PASSWORD) {
			msg = "Please enter valid password";
		} else {
			msg = {status : "success", user : config.USER_NAME};
		}

		res.send(msg);
	});
	app.post('/updateRaisedCheck', function(req, res){
		var raised = req.body.raised;
		var unraised = req.body.unraised;
		
		for(var i=0; i<raised.length; i++) {
			db.collection('no_diary').updateOne(
		   	{ "Client Code": raised[i] },
		   	{ $set: { "raised_diary": 1 } }, 
		   	function(err, results) {
		   	});
		}

		for(var i=0; i<unraised.length; i++) {
			db.collection('no_diary').updateOne(
		   	{ "Client Code": unraised[i] },
		   	{ $set: { "raised_diary": 0 } }, 
		   	function(err, results) {
		   	});
		}
		res.send();
	});
};