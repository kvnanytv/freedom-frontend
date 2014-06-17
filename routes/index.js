var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	path: 'dashboard',
  	name : ['name 1', 'name 2']
  });
});
router.get('/admin', function(req, res) {
  res.render('index', { 
  	'path': 'notdashboard' 
  });
});
module.exports = router;
