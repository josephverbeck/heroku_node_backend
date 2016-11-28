var express = require('express')
var cfg = require('_/config')

var app = express()

app.locals.cfg = cfg
// app.use(express.static(cfg.pubDir))
app.use(require('./routes.js'))

module.exports = app