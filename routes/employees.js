var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees.js');

/* GET employees listing. */
router.get('/', function (req, res, next) {
    employeesCtrl.index(req, res);
});

module.exports = router;