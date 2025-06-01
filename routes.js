const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Option 1: Redirect to /listings (your main page)
  res.redirect('/listings');

  // Option 2: Render a home page if you want to create views/home.ejs
  // res.render('home');
});

module.exports = router;
