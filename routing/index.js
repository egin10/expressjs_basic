var express = require('express');
var router = express.Router();

//add controller
var bookController = require('./../controllers/bookController');
var movieController = require('./../controllers/movieController');

router.get('/', function(req, res){
	res.render('index');
});

router.get('/books', bookController.listBooks);

router.get('/movies', movieController.listMovies);

module.exports = router