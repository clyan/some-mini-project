/**
 * Created by prettyRain on 2018/12/24.
 * courseLesson骨架
 * model : 由Schema构造生成的模型，除了Schema定义的数据库骨架以外，
 *         还具有数据库操作的行为，类似于管理数据库属性、行为的类
 */

var mongoose = require('mongoose');

var db = require('../db/db.js');
/**
 * schema :一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，也就
 *         是说它不具备对数据库的操作能力.可以说是数据属性模型(传统意义的
 *         表结构)，又或着是“集合”的模型骨架
 */
var Schema = mongoose.Schema;
var courseLessonSchema = new Schema({
  id : {type:Number},
  image  : {type:String},
  lastLearnLessonName  : {type:String},
  name  : {type:String},
})
/**
 * 自定义类方法
 */
//插入数据
courseLessonSchema.statics.add = function(paramJSON = {}){
  return  new Promise((resolve,reject) => {
    this.model('courseLesson').create(paramJSON,function (err,result) {
      if (err)
        reject(err)
      resolve(result)
    });//类方法
  })
}

//查询数据

courseLessonSchema.statics.findCourseLesson = function(paramJSON = {}){
 return  new Promise((resolve,reject) => {
   this.model('courseLesson').find(paramJSON,function (err,result) {
      if (err)
        reject(err)
     resolve(result)
   });//类方法
  })
}
courseLessonSchema.statics.removeCourseLesson = function(paramJSON = {}){
  return  new Promise((resolve,reject) => {
    this.model('courseLesson').remove(paramJSON,function (err,result) {
      if (err)
        reject(err)
      resolve(result)
    });//类方法
  })
}

var courseLesson = db.model('courseLesson',courseLessonSchema);

module.exports = courseLesson;
