const express = require('express')

const router = express.Router()

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

module.exports = router;


