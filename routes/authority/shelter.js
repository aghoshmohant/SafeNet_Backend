var express = require('express');
var router = express.Router();
const pool =require("../../db");


router.get('/', function(req, res) {
    res.render('authority/shelter');
  });



  module.exports = router;