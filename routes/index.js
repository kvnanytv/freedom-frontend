var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	module_name: 'user'
  });
});
router.get('/admin', function(req, res) {
  res.render('index', {
  	module_name: 'admin'
  });
});
module.exports = router;
