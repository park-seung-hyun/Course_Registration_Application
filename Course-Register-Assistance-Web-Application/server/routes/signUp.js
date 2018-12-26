// signUp.js
// 회원가입 관련 라우팅

// 필요한 모듈
const express = require ('express');
const router = express.Router();
var mongoose = require('mongoose');
const ClientInfo = require('../database/clientInfoModel'); // 고객정보 데이터베이스

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

/* 회원가입 요청 -------------------------------------------------------------------
* 클라이언트에서 회원가입 요청을 하는 경우 실행
* POST를 통해 넘어오는 데이터(signID, signPW, signName)으로 ClientInfo에 저장한다.
* 아이디 중복일 경우 아이디 중복임을 반환한다.
*/
router.post('/requestSignUp', function (req, res) {

    ClientInfo.findOne({userID: req.body.signID}, function (err, info){
      var isValid = {boolean: false};
      // 에러
      if (err) {
        return console.log("err " + err);
      }
      // ID가 존재할 경우
      if(info){
        console.log('아이디 중복: '+info.userID);
        res.send(isValid);
      }
      //ID가 존재하지 않을 경우
      else {
        // 받은 정보를 통해 ClientInfo 객체 생성
        var cliInfo = new ClientInfo();
        cliInfo.userID = req.body.signID;
        cliInfo.userPassword = req.body.signPW;
        cliInfo.userName = req.body.signName;

        // ClientInfo 객체 저장
        cliInfo.save(function(err, document) {
            if(err) {
                return console.log("err " + err);
            }
            isValid.boolean = true;
            res.send(isValid);
            console.log('아이디 생성 완료: '+ document);
        });
      }
    })
});
module.exports = router;
