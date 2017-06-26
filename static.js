var express = require('express');
var path = require('path');
var static = express();

//home | index
static.use(express.static(path.join(__dirname, 'public')));

//books
static.use('/books', express.static(path.join(__dirname, 'public')));
static.use('/books/edit', express.static(path.join(__dirname, 'public')));

//movies
static.use('/movies', express.static(path.join(__dirname, 'public')));
static.use('/movies/edit', express.static(path.join(__dirname, 'public')));

module.exports = static

