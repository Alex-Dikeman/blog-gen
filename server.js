const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blog');

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true });

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('layout', "defaultLayout")

app.use('/blog', blogRouter);

app.get('/', (req, res) => {
  const blog = [{
    title: "Bloop",
    date: "2-17-22",
    description: "Henlo"
  }, {
    title: "Bloop Boop",
    date: "2-16-22",
    description: "Henlooo"
  }]
  res.render('index', { blog: blog});
});
app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.use('/public', express.static("public"))

app.get('*', (req, res) => {
  res.status(404).render('pages/error404');
});

app.listen(8000);
