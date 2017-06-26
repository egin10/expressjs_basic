var express = require('express');
var router = express.Router();

//add controller
var movieController = require('./../controllers/movieController').movieController;

//index | list
router.get('/', movieController.listMovies);

//add
router.get('/add', movieController.addMovieGet);
router.post('/add', movieController.addMoviePost);

//edit
router.get('/edit/:id', movieController.editMovieGet);
router.post('/edit', movieController.editMoviePost);

//edit
router.get('/delete/:id', movieController.deleteMovie);

module.exports = router