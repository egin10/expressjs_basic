var express = require('express');
var view = require('swig');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//=================== DEFINE VIEW ENGINE
app.engine('html', view.renderFile); //define module view engine using swig
app.set('view engine', 'html'); //setting module view engine with html from app.egin('html', view engine)
app.set('views', path.join(__dirname + '/views')); //define view dir

//use public source : bootstarp || static file
app.use(express.static(path.join(__dirname, 'bower_components')));
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//=================== ROUTER
var routing = {
	indexRouter : require('./routing'),
	bookRouter : require('./routing/bookRouter'),
	movieRouter : require('./routing/movieRouter')
};
app.use('/', routing.indexRouter); //index home
app.use('/books', routing.bookRouter); //bookRouter
app.use('/movies', routing.movieRouter); //bookRouter

//=================== SERVER
var port = process.env.PORT || 8000;
app.listen(port, function(req, res){
	console.log("Server running on http://localhost:" + port);
});