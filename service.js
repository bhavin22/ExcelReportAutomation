var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var schedule = require('node-schedule');
var mongoXlsx = require('mongo-xlsx');
var model = null;

var url = 'mongodb://localhost:27017/reportAutomation';
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 0;
rule.minute = 0;

//var j = schedule.scheduleJob(rule, function(){
  	console.log('Start Scheduler!');

  	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server.");

		mongoXlsx.xlsx2MongoData("./../Aged Debt Totals.xlsx", model, function(err, data1) {
			data1 = data1.filter(function(el) {
    			return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;
			});
	  		db.collection('aged_dept_total').remove();
			db.collection('aged_dept_total').insertMany(data1, function(err, r) {
				assert.equal(null, err);
	    		console.log(r.insertedCount + " records inserted in aged_dept_total");

	    		mongoXlsx.xlsx2MongoData("./../Diary report.xlsx", model, function(err, data2) {
	    			data2 = data2.filter(function(el) {
		    			return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;
					});
			  		db.collection('diary_report').remove();
					db.collection('diary_report').insertMany(data2, function(err, r) {
						assert.equal(null, err);
			    		console.log(r.insertedCount + " records inserted in diary_report");
			    		db.collection('no_diary').remove();
			    		db.collection('aged_dept_total').distinct( "Client Code" , function(err, distinct_client_code) {
			    			
			    			var cursor = db.collection('diary_report').find(
				    			{ 
				    				"Diary Code": 
				    				{ 
				    					$nin: distinct_client_code
				    				} 
				    			}, { 'Date': 1 , _id : 0
				    			}
				    		);

				    		cursor.each(function(err, doc) {
						      assert.equal(err, null);
						      	if (doc != null) {
						      		doc.raised_diaries = 'No';
						         	db.collection('no_diary').insertOne(doc);
						      	} else {
						      		console.log('End Scheduler!');
			    					
						      	}
						   });
			    		}); 
					}); 
				});
			}); 
		});	  	
	});
//});