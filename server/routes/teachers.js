var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // mysql.query('SELECT * FROM teachers', function(error, result, fields) {
  //   res.json(result);

  mysql.query("SELECT *, GROUP_CONCAT(courses_x_teachers.course_id SEPARATOR ',') AS teacher_courses FROM teachers LEFT JOIN courses_x_teachers ON teachers.id = courses_x_teachers.teacher_id GROUP BY teachers.id", function(error, result, fields) {
    res.json(result);
  });
});

module.exports = router;