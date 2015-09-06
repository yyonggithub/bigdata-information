var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chart',function(req,res,next){
  var body = {};
  res.render('pages/chart',{title:'Echarts',data:body})
})

router.get('/page1',function(req,res,next){
  res.render('pages/page1',{title:'page1'});
})

module.exports = router;
