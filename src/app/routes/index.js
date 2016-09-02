var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/admin', function(req, res, next) {
  res.render('starter');
});

/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Express',body:'<pre><////></pre>' });
});






module.exports = router;
