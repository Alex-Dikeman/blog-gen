const express = require('express');
const fs = require ('fs');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.use(express.static("public"))

app.get('*', function(req, res){
  res.status(404).render('pages/error404');
});

app.listen(3000);
