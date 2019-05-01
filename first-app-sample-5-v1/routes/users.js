var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Xiao Ming, Xiao Li, Lao Wang');
});

module.exports = router;
