// server.js

// 필요한 모듈
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// express에서 제공하는 session 모듈
var session = require('express-session');

// 테스트용 라우트
const test = require('./server/routes/test');

const doajou = require('./server/routes/doAjou');

// 회원가입 라우트
const signup = require('./server/routes/signUp');

// 데이터베이스 라우트
const datebase = require('./server/database/clientInfoModel');

const app = express();

// POST 데이터 파싱 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// ng build 명령 실행시 생성되는 static 리소스 폴더 경로 및 이름 설정
app.use(express.static(path.join(__dirname, 'dist')));

// session 설정
app.use(session({
  secret : 'dsdfsdfwerwer!!!sdfsdfs', // 보안을 위한 secret key
  resave: false, // session Id를 접속할 때마다 새로 발급 여부
  saveUnintialized: true // session을 사용하기 전까지는 발급하지 않음
}));

// test.js를 'localhost:3000/test' 에 대한 라우터로 설정
app.use('/test',test);

// 라우터 설정
app.use('/',doajou); // 메인페이지
app.use('/signUp', signup); // 회원가입
app.use('/db',datebase); // 데이터베이스

// 모든 경로에 대한 라우터 설정 및 반환 파일 경로 설정
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

// Port 설정
const port = process.env.PORT || '3000';
app.set('port',port);

// HTTP 서버 생성
const server = http.createServer(app);

// 설정된 포트로 서버가 요청 대기
server.listen(port,function(){
  console.log('Express run on localhost'+port);
});

module.export = server;
