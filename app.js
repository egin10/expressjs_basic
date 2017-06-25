var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send("Hello World of ExpressJs!");
});

var port = process.env.PORT || 8000;
app.listen(port, function(req, res){
	console.log("Server running on http://localhost:" + port);
});