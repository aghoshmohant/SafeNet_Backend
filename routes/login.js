var express = require('express');
var router = express.Router();
const pool =require("../db");




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


module.exports = router;