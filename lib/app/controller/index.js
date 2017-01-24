
exports.index = function (req, res) {
  res.render('index')
};

exports.weather_station = require('./weather_station.js').contact;

exports.mailer = require('./mail_server.js').contact;