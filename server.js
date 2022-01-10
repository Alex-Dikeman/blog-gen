const express = require('express');
const fs = require ('fs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('here')
  res.render('index')
})

app.listen(3000);
