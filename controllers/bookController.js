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
		var newBooks = {
			id : dataBooks.length + 1,
			judul : req.body.judul,
			qty : req.body.qty
		};
		//add data to dataBooks
		dataBooks.push(newBooks);
		console.log(newBooks);
		res.redirect('/books');
	},
};

module.exports.bookController = Books;
