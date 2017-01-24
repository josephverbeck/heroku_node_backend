
var mongo = cfg.mongo;

exports.contact = function(req, res){
    var tempature =  req.body.temp;
    var humidity = req.body.hum;
    mongo.createData();
}