
var MongoClient = require('mongodb').MongoClient;
var state = {
    db: null
};

MongoClient.connect(process.env.MONGODB_URI, function(err, db){
    if(err) console.log("Failed to make connection with error " + err );
    state.db = db;
    console.log("Connection has been made");
});

module.exports = {
    createData: function(data){
        console.log(data);
        state.db.collection('weather_station').insertOne(data,function(err, result){
            assert.equal(err, null);
            console.log("Document has been saved");
        });
    },
    deleteData: function(){
        ;
    }
};
