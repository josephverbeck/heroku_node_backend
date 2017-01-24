var cfg = require('_/config');
var mongo = cfg.mongo;

exports.contact = function(req, res){
    console.log(req.body.temp);
    console.log(req.body.hum);
    mongo.connect.createData(req.body);
    res.send('Success');
}