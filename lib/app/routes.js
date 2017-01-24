var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/', ctrl.index);

router.get('/create_user', function(req, res){
    console.log("hello")
});
router.post('/create_user', ctrl.mailer);

router.post('/tempature_humidity', ctrl.weather_station);


module.exports = router;