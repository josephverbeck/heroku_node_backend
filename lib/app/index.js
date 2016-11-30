var express = require('express');
var cfg = require('_/config');

var app = express();
console.log(cfg.viewDir);

app.set('views', cfg.viewDir);
app.set('view engine', 'jade');
app.locals.cfg = cfg;

app.use(express.static(cfg.pubDir));
app.use(require('./routes.js'));

module.exports = app;