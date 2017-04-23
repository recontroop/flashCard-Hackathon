var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://rusbeh:rusbeh42@flashme-shard-00-00-ml985.mongodb.net:27017,flashme-shard-00-01-ml985.mongodb.net:27017,flashme-shard-00-02-ml985.mongodb.net:27017/flashMe?ssl=true&replicaSet=flashMe-shard-0&authSource=admin';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
    db.close();
  });
});
//-------------------------------------------------------
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
//-------------------------------------------------------
alert("hi");