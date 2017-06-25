var express = require('express');
var router = express.Router();

//add controller
var movieController = require('./../controllers/movieController');

router.get('/', movieController.listMovies);

module.exports = router