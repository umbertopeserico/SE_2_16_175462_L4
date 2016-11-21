var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees.js');

/* GET employees listing. */
router.get('/', function (req, res, next) {
    employeesCtrl.index(req, res);
});

router.get('/new', function (req, res, next) {
    employeesCtrl.newEmployee(req, res);
});

router.post('/', function (req, res, next) {
    employeesCtrl.createEmployee(req, res);
});

module.exports = router;