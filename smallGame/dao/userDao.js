(async ()=>{
  const User = require('../models/User');
  let ret = await User.sync();

  const findAllUser= await User.findAll();

  const addUser =await  async function(img,ip){
    return  await User.create({
        img: img,
        ip: ip
      });
  }

  module.exports ={
    addUser,
    findAllUser
  };
})()
