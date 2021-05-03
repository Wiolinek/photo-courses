var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

router.get('/', function(req, res, next) {
  mysql.query('SELECT name, level, duration, date, place, price, photo_course, course_id, teacher_name FROM courses LEFT JOIN courses_x_teachers ON courses.id = courses_x_teachers.course_id LEFT JOIN teachers ON courses_x_teachers.teacher_id = teachers.id', function(error, result, fields) {
    res.json(result);
  });
});

router.post('/filter', function(req, res, next) {
  let filterObject = [];
  if(req.body.teacherFilter !== "All" && req.body.teacherFilter.length) {
    filterObject.push(" teacher_name = '" + req.body.teacherFilter + "' ");
  }
  if(req.body.levelFilter !== "All" && req.body.levelFilter.length) {
    filterObject.push(" level = '" + req.body.levelFilter + "' ");
  }
  if(req.body.locationFilter !== "All" && req.body.locationFilter.length) {
    filterObject.push(" place = '" + req.body.locationFilter + "' ");
  }

  mysql.query("SELECT name, level, duration, date, place, price, photo_course, course_id, teacher_name FROM courses LEFT JOIN courses_x_teachers ON courses.id = courses_x_teachers.course_id LEFT JOIN teachers ON courses_x_teachers.teacher_id = teachers.id " + (filterObject.length ? 'WHERE' + filterObject.join('AND') :''), function(error, result, fields) {
    res.json(result);
  });
});


module.exports = router;