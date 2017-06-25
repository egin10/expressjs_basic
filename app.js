var express = require('express');
var view = require('swig');
var path = require('path');

var app = express();

//define view engine
app.engine('html', view.renderFile); //define module view engine using swig
app.set('view engine', 'html'); //setting module view engine with html from app.egin('html', view engine)
app.set('views', path.join(__dirname + '/views')); //define view dir

//use public source : bootstarp || static file
app.use(express.static(path.join(__dirname, 'bower_components')));

//router
var routing = require('./routing');
app.use('/', routing);

var port = process.env.PORT || 8000;
app.listen(port, function(req, res){
	console.log("Server running on http://localhost:" + port);
});