var express = require('express');
var router = express.Router();

var bookController = require('./../controllers/bookController');

//index | list
router.get('/', bookController.listBooks);
//add
router.get('/add', bookController.addBookGet);
router.post('/add', bookController.addBookPost);
//edit
router.get('/edit/:id', bookController.editBookGet);
router.post('/edit', bookController.editBookPost);
//delete
router.get('/delete/:id', bookController.deleteBook);

module.exports = router