const Router = require('koa-router');
const router = new Router();
const courseLesson = require('../model/courseLesson');
router.get("/courseLessons", async ctx => {

  const data =  await courseLesson.findCourseLesson({});

  ctx.body = data
});
module.exports = router;
