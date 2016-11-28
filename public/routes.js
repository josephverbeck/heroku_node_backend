bodyParser = require(‘body-parser’);

module.exports = function(app) {
 app.use(bodyParser.json());
 app.get('/', function(request, response) {
  response.json({"hello": "Node"});
 });
};