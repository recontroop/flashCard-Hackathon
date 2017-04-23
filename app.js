//
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://rusbeh:rusbeh42@flashme-shard-00-00-ml985.mongodb.net:27017,flashme-shard-00-01-ml985.mongodb.net:27017,flashme-shard-00-02-ml985.mongodb.net:27017/flashMe?ssl=true&replicaSet=flashMe-shard-0&authSource=admin';


// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  alert("hello");
  db.close();
});


//
/*
  var userName = document.getElementById("userName")
  var password = document.getElementById("password")
*/

recon