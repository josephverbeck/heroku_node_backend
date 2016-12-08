
exports.index = function (req, res) {
  res.render('index')
};

exports.mailer = require('./mail_server.js').contact;