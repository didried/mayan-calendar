var express = require('express')
var app = express()
var api = require('../api')

module.exports = function(parent) {
  app.get('/', render_index)

  parent.use(app)
}

function render_index(req, res) {
  res.render('index', {'longcount': api.longcount(/*1356069966*/)});
}
