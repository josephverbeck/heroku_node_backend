var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/', ctrl.index);

router.route('/create_user')
    .get(function (req, res) {
      console.log(req);
    })

    .post(function(reg, res){
    console.log(res);
    });


module.exports = router;