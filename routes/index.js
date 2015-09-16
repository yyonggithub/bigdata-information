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

router.get('/page2',function(req,res,next){
  res.render('pages/page2',{title:'page2'});
})

router.get('/demo',function(req,res,next){
  res.render('demo',{title:"page2"})
})
module.exports = router;
