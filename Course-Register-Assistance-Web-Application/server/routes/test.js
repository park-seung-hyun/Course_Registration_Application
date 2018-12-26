// test.js

// 필요한 모듈
const express = require ('express');
const router = express.Router();

// 라우팅
router.get('/',function(req,res){
  res.send('express works');
});
router.get('/testGET',function(req,res){
  console.log(req.query.test);
  res.send({test : 'response data from GET handler'});
});
router.post('/testPOST',function(req,res){
  console.log(req.body.test);
  res.send({test : 'response data from POST handler'});
});

module.exports = router;
