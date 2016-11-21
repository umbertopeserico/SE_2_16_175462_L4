var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees.js');

/* GET employees listing. */
router.get('/', function (req, res, next) {
    employeesCtrl.index(req, res);
});

router.get('/new', function (req, res, next) {
    employeesCtrl.new(req, res);
});

router.post('/', function (req, res, next) {
    employeesCtrl.create(req, res);
});

router.get('/edit/:id', function (req, res, next) {
    employeesCtrl.edit(req, res);
});

router.put('/update/:id', function (req, res, next) {
    employeesCtrl.update(req, res);
});

router.delete('/:id', function (req, res, next) {
    employeesCtrl.destroy(req, res);
});

module.exports = router;