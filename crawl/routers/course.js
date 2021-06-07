const Router = require('koa-router');
const router = new Router({prefix: '/course'});
const courseLesson = require('../model/courseLesson');
const course = require('../model/course');
const lesson = require('../model/lesson');
const axios = require('../util/axios');
const {courseUrl, lessonUrl} = require('../util/config');

router.get("/course", async ctx => {
  const {id} = ctx.query;

  const data = await course.findCourse({courseId: id});

  ctx.body = data;
});
router.get("/lesson", async ctx => {
  const {id, courseId} = ctx.query;

  const data = await lesson.findLesson({id: id, courseId: courseId});

  ctx.body = data;
});

// router.post("/updateCourse", async ctx => {
//   const {id} = ctx.request.body;
//   const courses = await course.findCourse({courseId:id});
//   let netCourse = await axios.get(courseUrl + id);
//   if(!netCourse){
//     ctx.body = {
//       code:-1,
//       data:null,
//       msg:"更新出错,请重新尝试",
//     };
//   }
//   let courseSectionList = netCourse && netCourse.data.content.courseSectionList;
//   let sign = null;
//   let data = null;
//   let lessonId = null;
//   let courseId = null;
//   let lessonData = null;
//   let sectionId = null;
//   let index = null;
//   let errorCount = 0;
//   let currentCourse = null;
//   console.log("开始更新");
//   let i = 0;let j = 0;
//   try {
//     for (; i < courseSectionList.length; i++) {
//       if (i >= courses.length) {
//         await course.add(courseSectionList[i])
//       }else {
//         for (; j < courseSectionList[i]["courseLessons"].length; j++) {
//           if (j >= courses[i]["courseLessons"].length) {
//             lessonId = courseSectionList[i]["courseLessons"][j]["id"];
//             data = await axios.get(lessonUrl + lessonId);
//             //获取数据失败重新获取
//             if (!data) {
//               j--;
//               continue;
//             }
//             lessonData = data.data.content;
//             await lesson.add(lessonData);
//             break;
//           }else if (courses[i]["courseLessons"][j]["status"] === 'RELEASE') {
//               continue;
//           }
//           if (courseSectionList[i]["courseLessons"][j]["status"] === 'RELEASE'
//                     && courses[i]["courseLessons"][j]["status"] !== 'RELEASE') {
//             console.log(courses[i]["courseLessons"][j]["status"])
//             lessonId = courseSectionList[i]["courseLessons"][j]["id"];
//             courseId = courseSectionList[i]["courseLessons"][j]["courseId"];
//             sectionId = courseSectionList[i]["courseLessons"][j]["sectionId"];
//
//             data = await axios.get(lessonUrl + lessonId);
//             //获取数据失败重新获取
//             if (!data) {
//               j--;
//               continue;
//             }
//             lessonData = data.data.content;
//             await lesson.updateLesson({'id':lessonId, 'courseId': courseId}, {$set: {'textContent':lessonData.textContent}});
//             index =`courseLessons.${j}.status`;
//             console.log(courseSectionList,courses,lessonId,courseId,sectionId,index);
//             await course.updateCourse({ "courseLessons": { $elemMatch: { "courseId": courseId, "sectionId": sectionId,'id' : lessonId} } }, {$set: {[index]:'RELEASE'}});
//           }
//         }
//       }
//     }
//     } catch (e) {
//     console.log("更新出错,请重新尝试");
//     console.log(e)
//     ctx.body = {
//       code:-1,
//       data:null,
//       msg:"更新出错,请重新尝试",
//     };
//   }
//   console.log("更新完成")
//   ctx.body = {
//     code:0,
//     msg:"更新完成",
//     data:courseSectionList
//   };
// });

router.post("/updateCourse", async ctx => {
  const {id} = ctx.request.body;
  await course.removeCourse({courseId:id});
  let netCourse = await axios.get(courseUrl + id);
  if(!netCourse){
    ctx.body = {
      code:-1,
      data:null,
      msg:"更新出错,请重新尝试"
    };
  }
  let courseSectionList = netCourse && netCourse.data.content.courseSectionList;
  console.log("开始更新");
  let data = null;
  let lessonId = null;
  let courseId = null;
  let lessonData = null;
  let sectionId = null;
  let isLesson = null;
  let courseLessons = null;
  try {
    for(let i = 0; i < courseSectionList.length; i++){
      await course.add(courseSectionList[i]);
      for (let j = 0; j < courseSectionList[i]['courseLessons'].length; j++) {
        courseLessons = courseSectionList[i]["courseLessons"][j]
        lessonId = courseLessons["id"];
        courseId = courseLessons["courseId"];
        sectionId = courseLessons["sectionId"];
        isLesson = await lesson.findLesson(
          {id:lessonId,
            courseId:courseId,
            sectionId:sectionId});
        if(isLesson.length > 0 && (!!isLesson[0]["textContent"])){
          continue;
        }
        data = await axios.get(lessonUrl + lessonId);
        if(!data){
          j--;
          continue;
        }
        lessonData =  data.data.content;
         console.log(isLesson)
        if (isLesson.length && !(!!isLesson[0]["textContent"])) {
          console.log(lessonData.textContent);
          console.log("content",data.data.content);
          await lesson.updateLesson({'id':lessonId, 'courseId': courseId}, {$set: {'textContent':lessonData.textContent}});
        } else  {
          console.log(lessonData)
          await lesson.add(lessonData);
        }
      }
    }
  } catch (e) {
    console.log("更新出错,请重新尝试");
    console.log(e)
    ctx.body = {
      code:-1,
      data:null,
      msg:"更新出错,请重新尝试",
    };
  }
  console.log("更新完成")
  ctx.body = {
    code:0,
    msg:"更新完成",
    data:courseSectionList
  };
});

router.post("/updateAllCourse", async ctx => {
  const {courselessons, courses, lessons} = require('../schedule/index.js');
  ctx.body = {
    code:0,
    data:{courselessons, courses, lessons},
    msg:"更新完成",
  };
});

module.exports = router;
