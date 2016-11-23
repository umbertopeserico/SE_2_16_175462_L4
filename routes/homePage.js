var express = require('express');
var router = express.Router();
var homePageCtrl = require('../controllers/homePage.js');

/* GET search employee. */
router.get('/find/:id', function (req, res, next) {
    homePageCtrl.find(req, res);
});

/* GET destroy employee. */
router.get('/destroy/:id', function (req, res, next) {
    homePageCtrl.destroy(req, res);
});

/* POST save employee. */
router.post('/save', function (req, res, next) {
    homePageCtrl.save(req, res);
});

module.exports = router;