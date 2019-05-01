var express = require('express');
var router = express.Router();

/* GET 611 page. */
router.get('/', function(req, res, next) {
  res.render('cherry', { title: 'my cherry' });
});

module.exports = router;
