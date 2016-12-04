var express = require('express');
var app = module.exports = express();

// set our default template engine to "jade"
// which prevents the need for extensions
app.set('view engine', 'pug');

// set views for error and 404 pages
app.set('views', __dirname + '/views');

// load routes
require('./routes/root')(app)

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
             
  console.log("mayan-calendar app listening at http://%s:%s", host, port)
})
