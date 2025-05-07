const express = require('express')

const router = express.Router()

router.get("/about", (req, res) => {
  res.render('index.ejs')
});

router.get("/dashboard", (req, res) => {
  // res.send("Dashboard page");
  res.render('dashboard.ejs')

});

module.exports = router;


