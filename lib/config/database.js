
var client = require('mongodb').MongoClient;
var assert = require('assert');

client.connect(process.env.DATABASE_URL, function(err, db){
    assert.equal(null, err);
    console.log("Connection made");
});

module.exports = client;
