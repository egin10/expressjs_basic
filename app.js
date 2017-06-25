var express = require('express');
var view = require('swig');
var path = require('path');

var app = express();

//define view engine
app.engine('html', view.renderFile); //define module view engine using swig
app.set('view engine', 'html'); //setting module view engine with html from app.egin('html', view engine)
app.set('views', path.join(__dirname + '/views')); //define view dir

//router
var mainRouter = require('./routing/mainRouter');
app.use('/', mainRouter);

var port = process.env.PORT || 8000;
app.listen(port, function(req, res){
	console.log("Server running on http://localhost:" + port);
});