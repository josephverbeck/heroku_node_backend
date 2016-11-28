var express = require('express');
var app = express();
var database = require('./config/database');

require(‘./api/routes.js’)(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(function (error, request, response, next) {
 console.error(error.stack);
 response.status(400).send(error.message);
});

app.listen(app.get('port'), function(){
	console.log('Node is running on port', app.get('port'));
});