var dataBooks = [
	{ id : 1, judul : "Belajar HTML dan CSS", qty : 2},
	{ id : 2, judul : "Belajar OOP PHP", qty : 2},
	{ id : 3, judul : "Belajar ExpressJs", qty : 1},
];

var index = ""; //variable index

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
		var lastIndex = "";
		var lastID = "";
		if( dataBooks.length != 0 ){
			lastIndex = dataBooks.length - 1;
			lastID = dataBooks[lastIndex].id;
		}else{
			lastID = 0;
		}
		
		var newBooks = {
			id : lastID + 1,
			judul : req.body.judul,
			qty : req.body.qty
		};
		// add data to dataBooks
		dataBooks.push(newBooks);
		res.redirect('/books');
	},
	editBookGet : function(req, res){
		//find Index from Array
		index = req.params.id - 1;

		var data = {
			id : dataBooks[index].id,
			judul : dataBooks[index].judul,
			qty : dataBooks[index].qty,
		};
		res.render('editBook', {
			data : data
		});
	},
	editBookPost : function(req, res){
		var newData = {
			id : dataBooks[index].id,
			judul : req.body.judul,
			qty : req.body.qty
		}
		//update data to dataBooks
		dataBooks[index] = newData;
		res.redirect('/books');
	},
	deleteBook : function(req, res){
		if(dataBooks.length == 1){
			dataBooks.splice(0, 1);	
		}else{
			index = req.params.id - 1;
			dataBooks.splice(index, 1);
		}
		res.redirect('/books');
	},
};

module.exports.bookController = Books;
