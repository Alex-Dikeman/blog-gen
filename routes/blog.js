const express= require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

router.use(expressLayouts);

router.use((req, res, next) => {
  req.app.set('layout', 'defaultLayout');
  next();
})

router.get('/', (req, res) => {
  res.render('pages/blog')
})

module.exports = router;
