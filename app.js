var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://rusbeh:rusbeh42@flashme-shard-00-00-ml985.mongodb.net:27017,flashme-shard-00-01-ml985.mongodb.net:27017,flashme-shard-00-02-ml985.mongodb.net:27017/flashMe?ssl=true&replicaSet=flashMe-shard-0&authSource=admin';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});
//////////////////////////////////////////////////////////////
function output(){
	document.getElementsByName('output').innerHTML = "test" 
}

//////////////////////////////////////////////////////////////
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  var userName = document.getElementById("userName")
  var password = document.getElementById("password")
  collection.insert([
    {
    	userName : password 
    }
  ], function(err, result) {;
    callback(result);
  });
}
//////////////////////////////////////////////
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}