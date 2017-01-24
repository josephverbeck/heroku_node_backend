var cfg = require('_/config');
var mongo = cfg.mongo;

exports.contact = function(req, res){
    mongo.createData(res.body);
    res.send('Success');
}