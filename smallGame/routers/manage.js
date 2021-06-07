const Router = require('koa-router');
const router = new Router({prefix:'/manage'});
const http =  require('http');
const fs =  require('fs');
const userService = require('../service/userService')
const msg = require('../utils/msg');

router.get("/", async ctx => {
  const data =  await userService.findAllUser();

  // console.error("data",data);
  await ctx.render("manage", {
    userList:data
  });
});

router.post("/delUser", async ctx => {
  const { id, name } = ctx.request.body;
  const path = '../uploads/' + name;
    const data =  await userService.delUser(id);
  console.log(path);
    console.log(fs.existsSync(path));
    if (fs.existsSync(path)) {
       fs.unlinkSync(path);
    };
    ctx.status = 200;
    ctx.body = {
      data: data
    }
});
// if (fs.existsSync('../uploads/1598700870259.jpeg')) {
//   fs.unlinkSync('../uploads/1598700870259.jpeg');
// }
console.log(fs.existsSync('../uploads/1598700868271.jpeg'))
// fs.existsSync(path)
module.exports = router;

