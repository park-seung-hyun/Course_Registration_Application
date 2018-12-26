// sugangListbyUserModel.js
// 수강신청 페이지 과목 리스트

const mongoose = require('mongoose');
const SugangInfo = require('../database/sugangInfoModel');
const SugangInfo2 = require('../database/sugangInfoModel');
const Schema = mongoose.Schema;

var sugangListbyUserSchema = new Schema({ // 수강신청페이지 리스트
  userID: String,
  subjectInfo: [SugangInfo.schema], // [두 번째 페이지] 수강신청 항목
  subjectInfo2: [SugangInfo2.schema] // [첫 번째 페이지] 수강신청 리스트
});
var SugangListByUser = mongoose.model('SugangListByUser', sugangListbyUserSchema);
module.exports = SugangListByUser;
