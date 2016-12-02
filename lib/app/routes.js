var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/', ctrl.index);

router.post('/create_user', function(sReq, sRes){
    console.log(sReq)
});

module.exports = router;