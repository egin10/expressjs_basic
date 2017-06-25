var express = require('express');
var router = express.Router();

var bookController = require('./../controllers/bookController').bookController;

router.get('/', bookController.listBooks);

router.get('/add', bookController.addBookGet);

router.post('/add', bookController.addBookPost);

module.exports = router