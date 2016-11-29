
var app = require('_/app');
var cfg = require('_/config');

app.listen(process.env.PORT || cfg.port);
console.log('app listening on port', cfg.port);