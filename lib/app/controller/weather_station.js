var cfg = require('_/config');
var mongo = cfg.mongo;

exports.contact = function(req, res){
    var tempature =  req.body.temp;
    var humidity = req.body.hum;
    mongo.createData();
    res.send('Success');
}