var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees.js');

/* GET employees listing. */
router.get('/', function (req, res, next) {
    employeesCtrl.index(req, res);
});

/* GET new employee form. */
router.get('/new', function (req, res, next) {
    employeesCtrl.new(req, res);
});

/* POST create employee form. */
router.post('/create', function (req, res, next) {
    employeesCtrl.create(req, res);
});

/* GET edit employee form. */
router.get('/edit/:id', function (req, res, next) {
    employeesCtrl.edit(req, res);
});

/* POST update employee. */
router.post('/update/:id', function (req, res, next) {
    employeesCtrl.update(req, res);
});

/* GET delete employee. */
router.get('/destroy/:id', function (req, res, next) {
    employeesCtrl.destroy(req, res);
});

module.exports = router;