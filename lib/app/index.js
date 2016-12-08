var express = require('express');
var cfg = require('_/config');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', cfg.viewDir);
app.set('view engine', 'jade');
app.locals.cfg = cfg;

// app.use(express.static(cfg.pubDir));
app.use(require('./routes.js'));

module.exports = app;