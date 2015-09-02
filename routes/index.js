var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chart',function(req,res,next){
  var body = {};
  res.render('chart',{title:'Echarts',data:body})
})

module.exports = router;
