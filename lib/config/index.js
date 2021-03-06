var env = process.env.NODE_ENV || 'development';
var resolve = require('path').resolve;
var mongo = require('./database.js');

// env specific config
var cfg = require('./env/'+env);
cfg.env = env;
cfg.mongo = mongo;

cfg.pubDir = resolve(__dirname, '../../public');
cfg.viewDir = resolve(__dirname, '../views');

module.exports = cfg;