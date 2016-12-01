var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  client.query('CREATE DATABASE ' + 'user', function (err) {
    if (err)
      console.log('failed to create....most likely already there'); // ignore if the db is there
    client.end();
  });
});

module.exports = pg;