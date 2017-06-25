var dataBooks = [
	{ id : 1, judul : "Belajar HTML dan CSS", qty : 4},
	{ id : 2, judul : "Belajar OOP PHP", qty : 2},
	{ id : 3, judul : "Belajar ExpressJs", qty : 1},
];

var Books = {
	listBooks : function(req, res){
		res.render('books', { 
			data : dataBooks
		});
	},
	addBookGet : function(req, res){
		res.render('addBook');
	},
	addBookPost : function(req, res){
		var newJudul = req.body.judul;
		var newQty = req.body.qty;
		dataBooks.push({
			id : dataBooks.length + 1,
			judul : newJudul,
			qty : newQty
		});
		res.redirect('/books');
	},
};

module.exports.bookController = Books;
