var express = require('express');
var router = express.Router();

var dataBook = [
	{ id : 1, judul : "Belajar HTML dan CSS", jumlah : 4},
	{ id : 2, judul : "Belajar OOP PHP", jumlah : 2},
	{ id : 3, judul : "Belajar ExpressJs", jumlah : 1},
];

router.get('/', function(req, res){
	res.render('index');
});

router.get('/books', function(req, res){
	res.render('books', { 
		data : dataBook
	});
});

module.exports = router