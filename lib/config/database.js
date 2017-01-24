
var client = require('mongodb').MongoClient;
var assert = require('assert');

client.connect(process.env.MONGODB_URI, function(err, db){
    assert.equal(null, err);
    console.log("Connection made");
});

module.exports = {
    createData: function(){
        console.log("starter");
    },
    deleteData: function(){
        ;
    }
};
