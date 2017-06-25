var Movies = [
	{ id : 1 , judul : "Ada Apa Dengan C++ (AADC)", qty : 2},
	{ id : 2 , judul : "Wiro Sableng", qty : 3},
	{ id : 3 , judul : "Who Am I ?", qty : 1},
];

var listMovies = function(req, res){
	res.render('movies', { data : Movies });
};

module.exports.listMovies = listMovies;