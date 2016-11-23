var express = require('express');
var router = express.Router();

var homePageCtrl = require('../controllers/homePage.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    homePageCtrl.home(req, res);
});

module.exports = router;