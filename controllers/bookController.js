var Books = [
	{ id : 1, judul : "Belajar HTML dan CSS", qty : 4},
	{ id : 2, judul : "Belajar OOP PHP", qty : 2},
	{ id : 3, judul : "Belajar ExpressJs", qty : 1},
];

var listBooks = function(req, res){
	res.render('books', { 
		data : Books
	});
};

module.exports.listBooks = listBooks;
