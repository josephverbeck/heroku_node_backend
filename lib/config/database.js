
var MongoClient = require('mongodb').MongoClient;
var state = {
    db: null
};

state.db.connect();

module.exports = {
    connect: function(done){
        if(state.db) return done();
        MongoClient.connect(process.env.MONGODB_URI, function(err, db){
            if(err) return done(err);
            state.db = db;
            done();
        });
    },
    createData: function(data){
        console.log(data);
        var insertDocument = function(data, db, callback){
            db.collection('weather_station').insertOne(data, function(err, result){
                assert.equal(err, null);
                console.log("Document has been saved");
                callback();
            });
        }
        insertDocument(data, state.db, function(){ console.log("complete")});
    },
    deleteData: function(){
        ;
    }
};
