
var client = require('mongodb').MongoClient;
var assert = require('assert');

client.connect(process.env.MONGODB_URI, function(err, db){
    assert.equal(null, err);
    console.log("Connection made");
});

module.exports = {
    createData: function(data){
        console.log(data);
        var insertDocument = function(data, db, callback){
            db.collection('weather_station').insertOne(data, function(err, result){
                assert.equal(err, null);
                console.log("Document has been saved");
                callback();
            });
        }
        insertDocument(data, client, function(){ console.log("complete")});
    },
    deleteData: function(){
        ;
    }
};
