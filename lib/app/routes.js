var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/', ctrl.index);

router.get('/create_user', function(req, res){
    res.render('hello')
});
router.post('/create_user', ctrl.mailer);


module.exports = router;