// timeTableForUser.js
// 시간표 정보

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var timeTableForUserSchema = new Schema({ // 시간표 정보
  numberingArray: [],
  userID: String,
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
});
var TimeTableForUser = mongoose.model('TimeTableForUser', timeTableForUserSchema);
module.exports = TimeTableForUser;
