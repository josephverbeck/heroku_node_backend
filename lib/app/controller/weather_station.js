var cfg = require('_/config');
var mongo = cfg.mongo;

exports.contact = function(req, res){
    console.log(res.body.temp);
    console.log(res.body.hum);
    mongo.createData();
    res.send('Success');
}