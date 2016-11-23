var express = require('express');
var router = express.Router();
var homePageCtrl = require('../controllers/homePage.js');

/* GET employees listing. */
router.get('/find/:id', function (req, res, next) {
    homePageCtrl.find(req, res);
});

router.get('/destroy/:id', function (req, res, next) {
    homePageCtrl.destroy(req, res);
});

router.post('/save', function (req, res, next) {
    homePageCtrl.save(req, res);
});

module.exports = router;