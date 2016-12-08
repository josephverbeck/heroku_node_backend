var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/', ctrl.index);

router.post('/create_user', ctrl.mailer);


module.exports = router;