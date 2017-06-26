var dataMovies = [
	{ id : 1 , judul : "Ada Apa Dengan C++ (AADC)", year : 2012},
	{ id : 2 , judul : "Mr. Robot", year : 2015},
	{ id : 3 , judul : "Who Am I ?", year : 2016},
];

var index = "";

var movieController = {
	listMovies : function(req, res){
		res.render('movies', { data : dataMovies });
	},
	addMovieGet : function(req, res){
		res.render('addMovie');
	},
	addMoviePost : function(req, res){
		lastIndex = "";
		lastID = "";
		if(dataMovies.length != 0){
			lastIndex = dataMovies.length - 1;
			lastID = dataMovies[lastIndex].id + 1;
		}else{
			lastID = 1;
		}
		
		var newMovie = {
			id : lastID,
			judul : req.body.judul,
			year : req.body.year
		};
		dataMovies.push(newMovie);
		res.redirect('/movies');
	},
	editMovieGet : function(req, res){
		index = req.params.id - 1;
		var data = {
			id : dataMovies[index].id,
			judul : dataMovies[index].judul,
			year : dataMovies[index].year
		};

		res.render('editMovie', {
			data : data
		});
	},
	editMoviePost : function(req, res){
		var newData = {
			id : dataMovies[index].id,
			judul : req.body.judul,
			year : req.body.year
		};
		dataMovies[index] = newData;
		res.redirect('/movies');
	},
	deleteMovie : function(req, res){
		if(dataMovies.length == 1){
			dataMovies.splice(0, 1);
		}else{
			index = req.params.id - 1;
			dataMovies.splice(index, 1);
		}
		res.redirect('/movies');
	},
};

module.exports.movieController = movieController;