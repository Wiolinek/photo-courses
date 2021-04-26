var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

router.get('/', function(req, res, next) {
  mysql.query('SELECT name, level, duration, date, place, price, photo_course, course_id, teacher_name FROM courses LEFT JOIN courses_x_teachers ON courses.id = courses_x_teachers.course_id LEFT JOIN teachers ON courses_x_teachers.teacher_id = teachers.id', function(error, result, fields) {
    res.json(result);
  });
});

module.exports = router;