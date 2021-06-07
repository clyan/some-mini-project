const Router = require('koa-router');
const router = new Router();
const userService = require('../service/userService')
const msg = require('../utils/msg');
const upload = require('../utils/upload');
router.get("/", async ctx => {
  await ctx.render("index", {});
});
router.post("/addUser", async ctx => {
  const ip = ctx.request.ip;
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  const path = upload(file);
  // 创建可读流
  console.error(path,ip);
  const data =  await userService.addUser(path,ip);
  ctx.body= msg(1).success();
})

router.get("/findAllUser", async ctx => {
  const data =  await userService.findAllUser();
  console.error("data",JSON.stringify(data));
  ctx.body= msg(data.data).success();
})
module.exports = router;
