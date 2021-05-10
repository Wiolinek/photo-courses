var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM about', function(error, result, fields) {
    res.json(result);
  });
});


module.exports = router;